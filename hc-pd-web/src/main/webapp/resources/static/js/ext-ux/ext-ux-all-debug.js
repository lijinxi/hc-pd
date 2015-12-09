/**
 * Base class from Ext.ux.TabReorderer.
 */
Ext.define('Ext.ux.BoxReorderer', {
    requires: [
        'Ext.dd.DD'
    ],

    mixins: {
        observable: 'Ext.util.Observable'
    },

    /**
     * @cfg {String} itemSelector
     * A {@link Ext.DomQuery DomQuery} selector which identifies the encapsulating elements of child
     * Components which participate in reordering.
     */
    itemSelector: '.x-box-item',

    /**
     * @cfg {Mixed} animate
     * If truthy, child reordering is animated so that moved boxes slide smoothly into position.
     * If this option is numeric, it is used as the animation duration in milliseconds.
     */
    animate: 100,

    /**
     * @event StartDrag
     * Fires when dragging of a child Component begins.
     * @param {Ext.ux.BoxReorderer} this
     * @param {Ext.container.Container} container The owning Container
     * @param {Ext.Component} dragCmp The Component being dragged
     * @param {Number} idx The start index of the Component being dragged.
     */

    /**
     * @event Drag
     * Fires during dragging of a child Component.
     * @param {Ext.ux.BoxReorderer} this
     * @param {Ext.container.Container} container The owning Container
     * @param {Ext.Component} dragCmp The Component being dragged
     * @param {Number} startIdx The index position from which the Component was initially dragged.
     * @param {Number} idx The current closest index to which the Component would drop.
     */

    /**
     * @event ChangeIndex
     * Fires when dragging of a child Component causes its drop index to change.
     * @param {Ext.ux.BoxReorderer} this
     * @param {Ext.container.Container} container The owning Container
     * @param {Ext.Component} dragCmp The Component being dragged
     * @param {Number} startIdx The index position from which the Component was initially dragged.
     * @param {Number} idx The current closest index to which the Component would drop.
     */

    /**
     * @event Drop
     * Fires when a child Component is dropped at a new index position.
     * @param {Ext.ux.BoxReorderer} this
     * @param {Ext.container.Container} container The owning Container
     * @param {Ext.Component} dragCmp The Component being dropped
     * @param {Number} startIdx The index position from which the Component was initially dragged.
     * @param {Number} idx The index at which the Component is being dropped.
     */

    constructor: function() {
        this.mixins.observable.constructor.apply(this, arguments);
    },

    init: function(container) {
        var me = this;

        me.container = container;

        // Set our animatePolicy to animate the start position (ie x for HBox, y for VBox)
        me.animatePolicy = {};
        me.animatePolicy[container.getLayout().names.x] = true;



        // Initialize the DD on first layout, when the innerCt has been created.
        me.container.on({
            scope: me,
            boxready: me.onBoxReady,
            beforedestroy: me.onContainerDestroy
        });
    },

    /**
     * @private Clear up on Container destroy
     */
    onContainerDestroy: function() {
        var dd = this.dd;
        if (dd) {
            dd.unreg();
            this.dd = null;
        }
    },

    onBoxReady: function() {
        var me = this,
            layout = me.container.getLayout(),
            names = layout.names,
            dd;

        // Create a DD instance. Poke the handlers in.
        // TODO: Ext5's DD classes should apply config to themselves.
        // TODO: Ext5's DD classes should not use init internally because it collides with use as a plugin
        // TODO: Ext5's DD classes should be Observable.
        // TODO: When all the above are trus, this plugin should extend the DD class.
        dd = me.dd = new Ext.dd.DD(layout.innerCt, me.container.id + '-reorderer');
        Ext.apply(dd, {
            animate: me.animate,
            reorderer: me,
            container: me.container,
            getDragCmp: me.getDragCmp,
            clickValidator: Ext.Function.createInterceptor(dd.clickValidator, me.clickValidator, me, false),
            onMouseDown: me.onMouseDown,
            startDrag: me.startDrag,
            onDrag: me.onDrag,
            endDrag: me.endDrag,
            getNewIndex: me.getNewIndex,
            doSwap: me.doSwap,
            findReorderable: me.findReorderable
        });

        // Decide which dimension we are measuring, and which measurement metric defines
        // the *start* of the box depending upon orientation.
        dd.dim = names.width;
        dd.startAttr = names.beforeX;
        dd.endAttr = names.afterX;
    },

    getDragCmp: function(e) {
        return this.container.getChildByElement(e.getTarget(this.itemSelector, 10));
    },

    // check if the clicked component is reorderable
    clickValidator: function(e) {
        var cmp = this.getDragCmp(e);

        // If cmp is null, this expression MUST be coerced to boolean so that createInterceptor is able to test it against false
        return !!(cmp && cmp.reorderable !== false);
    },

    onMouseDown: function(e) {
        var me = this,
            container = me.container,
            containerBox,
            cmpEl,
            cmpBox;

        // Ascertain which child Component is being mousedowned
        me.dragCmp = me.getDragCmp(e);
        if (me.dragCmp) {
            cmpEl = me.dragCmp.getEl();
            me.startIndex = me.curIndex = container.items.indexOf(me.dragCmp);

            // Start position of dragged Component
            cmpBox = cmpEl.getBox();

            // Last tracked start position
            me.lastPos = cmpBox[me.startAttr];

            // Calculate constraints depending upon orientation
            // Calculate offset from mouse to dragEl position
            containerBox = container.el.getBox();
            if (me.dim === 'width') {
                me.minX = containerBox.left;
                me.maxX = containerBox.right - cmpBox.width;
                me.minY = me.maxY = cmpBox.top;
                me.deltaX = e.getX() - cmpBox.left;
            } else {
                me.minY = containerBox.top;
                me.maxY = containerBox.bottom - cmpBox.height;
                me.minX = me.maxX = cmpBox.left;
                me.deltaY = e.getY() - cmpBox.top;
            }
            me.constrainY = me.constrainX = true;
        }
    },

    startDrag: function() {
        var me = this,
            dragCmp = me.dragCmp;

        if (dragCmp) {
            // For the entire duration of dragging the *Element*, defeat any positioning and animation of the dragged *Component*
            dragCmp.setPosition = Ext.emptyFn;
            dragCmp.animate = false;

            // Animate the BoxLayout just for the duration of the drag operation.
            if (me.animate) {
                me.container.getLayout().animatePolicy = me.reorderer.animatePolicy;
            }
            // We drag the Component element
            me.dragElId = dragCmp.getEl().id;
            me.reorderer.fireEvent('StartDrag', me, me.container, dragCmp, me.curIndex);
            // Suspend events, and set the disabled flag so that the mousedown and mouseup events
            // that are going to take place do not cause any other UI interaction.
            dragCmp.suspendEvents();
            dragCmp.disabled = true;
            dragCmp.el.setStyle('zIndex', 100);
        } else {
            me.dragElId = null;
        }
    },

    /**
     * @private
     * Find next or previous reorderable component index.
     * @param {Number} newIndex The initial drop index.
     * @return {Number} The index of the reorderable component.
     */
    findReorderable: function(newIndex) {
        var me = this,
            items = me.container.items,
            newItem;

        if (items.getAt(newIndex).reorderable === false) {
            newItem = items.getAt(newIndex);
            if (newIndex > me.startIndex) {
                 while(newItem && newItem.reorderable === false) {
                    newIndex++;
                    newItem = items.getAt(newIndex);
                }
            } else {
                while(newItem && newItem.reorderable === false) {
                    newIndex--;
                    newItem = items.getAt(newIndex);
                }
            }
        }

        newIndex = Math.min(Math.max(newIndex, 0), items.getCount() - 1);

        if (items.getAt(newIndex).reorderable === false) {
            return -1;
        }
        return newIndex;
    },

    /**
     * @private
     * Swap 2 components.
     * @param {Number} newIndex The initial drop index.
     */
    doSwap: function(newIndex) {
        var me = this,
            items = me.container.items,
            container = me.container,
            wasRoot = me.container._isLayoutRoot,
            orig, dest, tmpIndex;

        newIndex = me.findReorderable(newIndex);

        if (newIndex === -1) {
            return;
        }

        me.reorderer.fireEvent('ChangeIndex', me, container, me.dragCmp, me.startIndex, newIndex);
        orig = items.getAt(me.curIndex);
        dest = items.getAt(newIndex);
        items.remove(orig);
        tmpIndex = Math.min(Math.max(newIndex, 0), items.getCount() - 1);
        items.insert(tmpIndex, orig);
        items.remove(dest);
        items.insert(me.curIndex, dest);

        // Make the Box Container the topmost layout participant during the layout.
        container._isLayoutRoot = true;
        container.updateLayout();
        container._isLayoutRoot = wasRoot;
        me.curIndex = newIndex;
    },

    onDrag: function(e) {
        var me = this,
            newIndex;

        newIndex = me.getNewIndex(e.getPoint());
        if ((newIndex !== undefined)) {
            me.reorderer.fireEvent('Drag', me, me.container, me.dragCmp, me.startIndex, me.curIndex);
            me.doSwap(newIndex);
        }

    },

    endDrag: function(e) {
        if (e) {
            e.stopEvent();
        }
        var me = this,
            layout = me.container.getLayout(),
            temp;

        if (me.dragCmp) {
            delete me.dragElId;

            // Reinstate the Component's positioning method after mouseup, and allow the layout system to animate it.
            delete me.dragCmp.setPosition;
            me.dragCmp.animate = true;

            // Ensure the lastBox is correct for the animation system to restore to when it creates the "from" animation frame
            me.dragCmp.lastBox[layout.names.x] = me.dragCmp.getPosition(true)[layout.names.widthIndex];

            // Make the Box Container the topmost layout participant during the layout.
            me.container._isLayoutRoot = true;
            me.container.updateLayout();
            me.container._isLayoutRoot = undefined;

            // Attempt to hook into the afteranimate event of the drag Component to call the cleanup
            temp = Ext.fx.Manager.getFxQueue(me.dragCmp.el.id)[0];
            if (temp) {
                temp.on({
                    afteranimate: me.reorderer.afterBoxReflow,
                    scope: me
                });
            }
            // If not animated, clean up after the mouseup has happened so that we don't click the thing being dragged
            else {
                Ext.Function.defer(me.reorderer.afterBoxReflow, 1, me);
            }

            if (me.animate) {
                delete layout.animatePolicy;
            }
            me.reorderer.fireEvent('drop', me, me.container, me.dragCmp, me.startIndex, me.curIndex);
        }
    },

    /**
     * @private
     * Called after the boxes have been reflowed after the drop.
     * Re-enabled the dragged Component.
     */
    afterBoxReflow: function() {
        var me = this;
        me.dragCmp.el.setStyle('zIndex', '');
        me.dragCmp.disabled = false;
        me.dragCmp.resumeEvents();
    },

    /**
     * @private
     * Calculate drop index based upon the dragEl's position.
     */
    getNewIndex: function(pointerPos) {
        var me = this,
            dragEl = me.getDragEl(),
            dragBox = Ext.fly(dragEl).getBox(),
            targetEl,
            targetBox,
            targetMidpoint,
            i = 0,
            it = me.container.items.items,
            ln = it.length,
            lastPos = me.lastPos;

        me.lastPos = dragBox[me.startAttr];

        for (; i < ln; i++) {
            targetEl = it[i].getEl();

            // Only look for a drop point if this found item is an item according to our selector
            if (targetEl.is(me.reorderer.itemSelector)) {
                targetBox = targetEl.getBox();
                targetMidpoint = targetBox[me.startAttr] + (targetBox[me.dim] >> 1);
                if (i < me.curIndex) {
                    if ((dragBox[me.startAttr] < lastPos) && (dragBox[me.startAttr] < (targetMidpoint - 5))) {
                        return i;
                    }
                } else if (i > me.curIndex) {
                    if ((dragBox[me.startAttr] > lastPos) && (dragBox[me.endAttr] > (targetMidpoint + 5))) {
                        return i;
                    }
                }
            }
        }
    }
});

/**
 * Description: 分页工具条下拉框
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/2/4 0004
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Ext.ux.ComboPageSize', {

    constructor: function (config) {
        if (config) {
            Ext.apply(this, config);
        }
    },
    init: function (pbar) {
        var combo,
            me = this;
        var pageList = me.pageList || [25, 50, 100,300, 500],
            defaultSize = me.defaultSize || 25;

        Ext.Array.include(pageList, defaultSize);
        pageList.sort(function (a, b) {
            return a > b ? 1 : -1
        });

        combo = Ext.widget('combo', {
            triggerAction: 'all',
            lazyRender: true,
            mode: 'local',
            width: 70,
            editable: false,
            store: pageList,
            value: defaultSize,
            listeners: {
                change: function (s, v) {
                    pbar.store.pageSize = v;
                    pbar.store.currentPage = 1;
                    pbar.store.load();
                }
            }

        });
        pbar.add(0, '-');
        pbar.add(0, combo);
        pbar.on({
            beforedestroy: function () {
                combo.destroy();
            }
        });
    }
});
/**
 * Barebones iframe implementation. 
 */
Ext.define('Ext.ux.IFrame', {
    extend: 'Ext.Component',

    alias: 'widget.uxiframe',

    loadMask: 'Loading...',

    src: 'about:blank',

    renderTpl: [
        '<iframe src="{src}" id="{id}-iframeEl" data-ref="iframeEl" name="{frameName}" width="100%" height="100%" frameborder="0"></iframe>'
    ],
    childEls: ['iframeEl'],

    initComponent: function () {
        this.callParent();

        this.frameName = this.frameName || this.id + '-frame';
    },

    initEvents : function() {
        var me = this;
        me.callParent();
        me.iframeEl.on('load', me.onLoad, me);
    },

    initRenderData: function() {
        return Ext.apply(this.callParent(), {
            src: this.src,
            frameName: this.frameName
        });
    },

    getBody: function() {
        var doc = this.getDoc();
        return doc.body || doc.documentElement;
    },

    getDoc: function() {
        try {
            return this.getWin().document;
        } catch (ex) {
            return null;
        }
    },

    getWin: function() {
        var me = this,
            name = me.frameName,
            win = Ext.isIE
                ? me.iframeEl.dom.contentWindow
                : window.frames[name];
        return win;
    },

    getFrame: function() {
        var me = this;
        return me.iframeEl.dom;
    },

    beforeDestroy: function () {
        this.cleanupListeners(true);
        this.callParent();
    },
    
    cleanupListeners: function(destroying){
        var doc, prop;

        if (this.rendered) {
            try {
                doc = this.getDoc();
                if (doc) {
                    Ext.get(doc).un(this._docListeners);
                    if (destroying) {
                        for (prop in doc) {
                            if (doc.hasOwnProperty && doc.hasOwnProperty(prop)) {
                                delete doc[prop];
                            }
                        }
                    }
                }
            } catch(e) { }
        }
    },

    onLoad: function() {
        var me = this,
            doc = me.getDoc(),
            fn = me.onRelayedEvent;

        if (doc) {
            try {
                // These events need to be relayed from the inner document (where they stop
                // bubbling) up to the outer document. This has to be done at the DOM level so
                // the event reaches listeners on elements like the document body. The effected
                // mechanisms that depend on this bubbling behavior are listed to the right
                // of the event.
                Ext.get(doc).on(
                    me._docListeners = {
                        mousedown: fn, // menu dismisal (MenuManager) and Window onMouseDown (toFront)
                        mousemove: fn, // window resize drag detection
                        mouseup: fn,   // window resize termination
                        click: fn,     // not sure, but just to be safe
                        dblclick: fn,  // not sure again
                        scope: me
                    }
                );
            } catch(e) {
                // cannot do this xss
            }

            // We need to be sure we remove all our events from the iframe on unload or we're going to LEAK!
            Ext.get(this.getWin()).on('beforeunload', me.cleanupListeners, me);

            this.el.unmask();
            this.fireEvent('load', this);

        } else if (me.src) {

            this.el.unmask();
            this.fireEvent('error', this);
        }


    },

    onRelayedEvent: function (event) {
        // relay event from the iframe's document to the document that owns the iframe...

        var iframeEl = this.iframeEl,

            // Get the left-based iframe position
            iframeXY = iframeEl.getTrueXY(),
            originalEventXY = event.getXY(),

            // Get the left-based XY position.
            // This is because the consumer of the injected event will
            // perform its own RTL normalization.
            eventXY = event.getTrueXY();

        // the event from the inner document has XY relative to that document's origin,
        // so adjust it to use the origin of the iframe in the outer document:
        event.xy = [iframeXY[0] + eventXY[0], iframeXY[1] + eventXY[1]];

        event.injectEvent(iframeEl); // blame the iframe for the event...

        event.xy = originalEventXY; // restore the original XY (just for safety)
    },

    load: function (src) {
        var me = this,
            text = me.loadMask,
            frame = me.getFrame();

        if (me.fireEvent('beforeload', me, src) !== false) {
            if (text && me.el) {
                me.el.mask(text);
            }

            frame.src = me.src = (src || me.src);
        }
    }
});

/*
 * TODO items:
 *
 * Iframe should clean up any Ext.dom.Element wrappers around its window, document
 * documentElement and body when it is destroyed.  This helps prevent "Permission Denied"
 * errors in IE when Ext.dom.GarbageCollector tries to access those objects on an orphaned
 * iframe.  Permission Denied errors can occur in one of the following 2 scenarios:
 *
 *     a. When an iframe is removed from the document, and all references to it have been
 *     removed, IE will "clear" the window object.  At this point the window object becomes
 *     completely inaccessible - accessing any of its properties results in a "Permission
 *     Denied" error. http://msdn.microsoft.com/en-us/library/ie/hh180174(v=vs.85).aspx
 *
 *     b. When an iframe is unloaded (either by navigating to a new url, or via document.open/
 *     document.write, new html and body elements are created and the old the html and body
 *     elements are orphaned.  Accessing the html and body elements or any of their properties
 *     results in a "Permission Denied" error.
 */



/**
 * Plugin for adding a close context menu to tabs. Note that the menu respects
 * the closable configuration on the tab. As such, commands like remove others
 * and remove all will not remove items that are not closable.
 */
Ext.define('Ext.ux.TabCloseMenu', {
    extend: 'Ext.plugin.Abstract',

    alias: 'plugin.tabclosemenu',

    mixins: {
        observable: 'Ext.util.Observable'
    },

    /**
     * @cfg {String} closeTabText
     * The text for closing the current tab.
     */
    closeTabText: 'Close Tab',

    /**
     * @cfg {Boolean} showCloseOthers
     * Indicates whether to show the 'Close Others' option.
     */
    showCloseOthers: true,

    /**
     * @cfg {String} closeOthersTabsText
     * The text for closing all tabs except the current one.
     */
    closeOthersTabsText: 'Close Other Tabs',

    /**
     * @cfg {Boolean} showCloseAll
     * Indicates whether to show the 'Close All' option.
     */
    showCloseAll: true,

    /**
     * @cfg {String} closeAllTabsText
     * The text for closing all tabs.
     */
    closeAllTabsText: 'Close All Tabs',

    /**
     * @cfg {Array} extraItemsHead
     * An array of additional context menu items to add to the front of the context menu.
     */
    extraItemsHead: null,

    /**
     * @cfg {Array} extraItemsTail
     * An array of additional context menu items to add to the end of the context menu.
     */
    extraItemsTail: null,

    // TODO - doc this.addEvents('aftermenu','beforemenu');

    //public
    constructor: function (config) {
        this.callParent([config]);
        this.mixins.observable.constructor.call(this, config);
    },

    init : function(tabpanel){
        this.tabPanel = tabpanel;
        this.tabBar = tabpanel.down("tabbar");

        this.mon(this.tabPanel, {
            scope: this,
            afterlayout: this.onAfterLayout,
            single: true
        });
    },

    onAfterLayout: function() {
        this.mon(this.tabBar.el, {
            scope: this,
            contextmenu: this.onContextMenu,
            delegate: '.x-tab'
        });
    },

    destroy : function(){
        this.callParent();
        Ext.destroy(this.menu);
    },

    // private
    onContextMenu : function(event, target){
        var me = this,
            menu = me.createMenu(),
            disableAll = true,
            disableOthers = true,
            tab = me.tabBar.getChildByElement(target),
            index = me.tabBar.items.indexOf(tab);

        me.item = me.tabPanel.getComponent(index);
        menu.child('#close').setDisabled(!me.item.closable);

        if (me.showCloseAll || me.showCloseOthers) {
            me.tabPanel.items.each(function(item) {
                if (item.closable) {
                    disableAll = false;
                    if (item !== me.item) {
                        disableOthers = false;
                        return false;
                    }
                }
                return true;
            });

            if (me.showCloseAll) {
                menu.child('#closeAll').setDisabled(disableAll);
            }

            if (me.showCloseOthers) {
                menu.child('#closeOthers').setDisabled(disableOthers);
            }
        }

        event.preventDefault();
        me.fireEvent('beforemenu', menu, me.item, me);

        menu.showAt(event.getXY());
    },

    createMenu : function() {
        var me = this;

        if (!me.menu) {
            var items = [{
                itemId: 'close',
                text: me.closeTabText,
                scope: me,
                handler: me.onClose
            }];

            if (me.showCloseAll || me.showCloseOthers) {
                items.push('-');
            }

            if (me.showCloseOthers) {
                items.push({
                    itemId: 'closeOthers',
                    text: me.closeOthersTabsText,
                    scope: me,
                    handler: me.onCloseOthers
                });
            }

            if (me.showCloseAll) {
                items.push({
                    itemId: 'closeAll',
                    text: me.closeAllTabsText,
                    scope: me,
                    handler: me.onCloseAll
                });
            }

            if (me.extraItemsHead) {
                items = me.extraItemsHead.concat(items);
            }

            if (me.extraItemsTail) {
                items = items.concat(me.extraItemsTail);
            }

            me.menu = Ext.create('Ext.menu.Menu', {
                items: items,
                listeners: {
                    hide: me.onHideMenu,
                    scope: me
                }
            });
        }

        return me.menu;
    },

    onHideMenu: function () {
        var me = this;
        me.fireEvent('aftermenu', me.menu, me);
    },

    onClose : function(){
        this.tabPanel.remove(this.item);
    },

    onCloseOthers : function(){
        this.doClose(true);
    },

    onCloseAll : function(){
        this.doClose(false);
    },

    doClose : function(excludeActive){
        var items = [];

        this.tabPanel.items.each(function(item){
            if(item.closable){
                if(!excludeActive || item !== this.item){
                    items.push(item);
                }
            }
        }, this);

        Ext.suspendLayouts();
        Ext.Array.forEach(items, function(item){
            this.tabPanel.remove(item);
        }, this);
        Ext.resumeLayouts(true);
    }
});

/**
 * This plugin allow you to reorder tabs of a TabPanel.
 */
Ext.define('Ext.ux.TabReorderer', {

    extend: 'Ext.ux.BoxReorderer',
    alias: 'plugin.tabreorderer',

    itemSelector: '.' + Ext.baseCSSPrefix + 'tab',

    init: function(tabPanel) {
        var me = this;
        
        me.callParent([tabPanel.getTabBar()]);

        // Ensure reorderable property is copied into dynamically added tabs
        tabPanel.onAdd = Ext.Function.createSequence(tabPanel.onAdd, me.onAdd);
    },

    onBoxReady: function() {
        var tabs,
            len,
            i = 0,
            tab;

        this.callParent(arguments);

        // Copy reorderable property from card into tab
        for (tabs = this.container.items.items, len = tabs.length; i < len; i++) {
            tab = tabs[i];
            if (tab.card) {
                tab.reorderable = tab.card.reorderable;
            }
        }
    },

    onAdd: function(card, index) {
        card.tab.reorderable = card.reorderable;
    },

    afterBoxReflow: function() {
        var me = this;

        // Cannot use callParent, this is not called in the scope of this plugin, but that of its Ext.dd.DD object
        Ext.ux.BoxReorderer.prototype.afterBoxReflow.apply(me, arguments);

        // Move the associated card to match the tab order
        if (me.dragCmp) {
            me.container.tabPanel.setActiveTab(me.dragCmp.card);
            me.container.tabPanel.move(me.startIndex, me.curIndex);
        }
    }
});
Ext.ns('Ext.ux');
/**
 * Plugin for adding a tab menu to a TabBar is the Tabs overflow.
 */
Ext.define('Ext.ux.TabScrollerMenu', {
    alias: 'plugin.tabscrollermenu',

    requires: ['Ext.menu.Menu'],

    /**
     * @cfg {Number} pageSize How many items to allow per submenu.
     */
    pageSize: 10,
    /**
     * @cfg {Number} maxText How long should the title of each {@link Ext.menu.Item} be.
     */
    maxText: 15,
    /**
     * @cfg {String} menuPrefixText Text to prefix the submenus.
     */
    menuPrefixText: 'Items',

    /**
     * Creates new TabScrollerMenu.
     * @param {Object} config Configuration options
     */
    constructor: function(config) {
        Ext.apply(this, config);
    },
    
    //private
    init: function(tabPanel) {
        var me = this;

        me.tabPanel = tabPanel;

        tabPanel.on({
            render: function() {
                me.tabBar = tabPanel.tabBar;
                me.layout = me.tabBar.layout;
                me.layout.overflowHandler.handleOverflow = Ext.Function.bind(me.showButton, me);
                me.layout.overflowHandler.clearOverflow = Ext.Function.createSequence(me.layout.overflowHandler.clearOverflow, me.hideButton, me);
            },
            destroy: me.destroy,
            scope: me,
            single: true
        });
    },

    showButton: function() {
        var me = this,
            result = Ext.getClass(me.layout.overflowHandler).prototype.handleOverflow.apply(me.layout.overflowHandler, arguments),
            button = me.menuButton;

        if (me.tabPanel.items.getCount() > 1) {
            if (!button) {
                button = me.menuButton = me.tabBar.body.createChild({
                    cls: Ext.baseCSSPrefix + 'tab-tabmenu-right'
                }, me.tabBar.body.child('.' + Ext.baseCSSPrefix + 'box-scroller-right'));
                button.addClsOnOver(Ext.baseCSSPrefix + 'tab-tabmenu-over');
                button.on('click', me.showTabsMenu, me);
            }
            button.setVisibilityMode(Ext.dom.Element.DISPLAY);
            button.show();
            result.reservedSpace += button.getWidth();
        } else {
            me.hideButton();
        }
        return result;
    },

    hideButton: function() {
        var me = this;
        if (me.menuButton) {
            me.menuButton.hide();
        }
    },

    /**
     * Returns an the current page size (this.pageSize);
     * @return {Number} this.pageSize The current page size.
     */
    getPageSize: function() {
        return this.pageSize;
    },
    /**
     * Sets the number of menu items per submenu "page size".
     * @param {Number} pageSize The page size
     */
    setPageSize: function(pageSize) {
        this.pageSize = pageSize;
    },
    /**
     * Returns the current maxText length;
     * @return {Number} this.maxText The current max text length.
     */
    getMaxText: function() {
        return this.maxText;
    },
    /**
     * Sets the maximum text size for each menu item.
     * @param {Number} t The max text per each menu item.
     */
    setMaxText: function(t) {
        this.maxText = t;
    },
    /**
     * Returns the current menu prefix text String.;
     * @return {String} this.menuPrefixText The current menu prefix text.
     */
    getMenuPrefixText: function() {
        return this.menuPrefixText;
    },
    /**
     * Sets the menu prefix text String.
     * @param {String} t The menu prefix text.
     */
    setMenuPrefixText: function(t) {
        this.menuPrefixText = t;
    },

    showTabsMenu: function(e) {
        var me = this;

        if (me.tabsMenu) {
            me.tabsMenu.removeAll();
        } else {
            me.tabsMenu = new Ext.menu.Menu();
        }

        me.generateTabMenuItems();

        var target = Ext.get(e.getTarget()),
            xy = target.getXY();

        //Y param + 24 pixels
        xy[1] += 24;

        me.tabsMenu.showAt(xy);
    },

    // private
    generateTabMenuItems: function() {
        var me = this,
            tabPanel = me.tabPanel,
            curActive = tabPanel.getActiveTab(),
            allItems = tabPanel.items.getRange(),
            pageSize = me.getPageSize(),
            tabsMenu = me.tabsMenu,
            totalItems, numSubMenus, remainder,
            i, curPage, menuItems, x, item, start, index;
            
        tabsMenu.suspendLayouts();
        allItems = Ext.Array.filter(allItems, function(item){
            if (item.id == curActive.id) {
                return false;
            }
            return item.hidden ? !!item.hiddenByLayout : true;
        });
        totalItems = allItems.length;
        numSubMenus = Math.floor(totalItems / pageSize);
        remainder = totalItems % pageSize;

        if (totalItems > pageSize) {

            // Loop through all of the items and create submenus in chunks of 10
            for (i = 0; i < numSubMenus; i++) {
                curPage = (i + 1) * pageSize;
                menuItems = [];

                for (x = 0; x < pageSize; x++) {
                    index = x + curPage - pageSize;
                    item = allItems[index];
                    menuItems.push(me.autoGenMenuItem(item));
                }

                tabsMenu.add({
                    text: me.getMenuPrefixText() + ' ' + (curPage - pageSize + 1) + ' - ' + curPage,
                    menu: menuItems
                });
            }
            // remaining items
            if (remainder > 0) {
                start = numSubMenus * pageSize;
                menuItems = [];
                for (i = start; i < totalItems; i++) {
                    item = allItems[i];
                    menuItems.push(me.autoGenMenuItem(item));
                }

                me.tabsMenu.add({
                    text: me.menuPrefixText + ' ' + (start + 1) + ' - ' + (start + menuItems.length),
                    menu: menuItems
                });

            }
        } else {
            for (i = 0; i < totalItems; ++i) {
                tabsMenu.add(me.autoGenMenuItem(allItems[i]));
            }
        }
        tabsMenu.resumeLayouts(true);
    },

    // private
    autoGenMenuItem: function(item) {
        var maxText = this.getMaxText(),
            text = Ext.util.Format.ellipsis(item.title, maxText);

        return {
            text: text,
            handler: this.showTabFromMenu,
            scope: this,
            disabled: item.disabled,
            tabToShow: item,
            iconCls: item.iconCls
        };
    },

    // private
    showTabFromMenu: function(menuItem) {
        this.tabPanel.setActiveTab(menuItem.tabToShow);
    },
    
    destroy: function(){
        Ext.destroy(this.tabsMenu, this.menuButton);       
    }
});

/**
 * Plugin which allows items to be dropped onto a toolbar and be turned into new Toolbar items.
 * To use the plugin, you just need to provide a createItem implementation that takes the drop
 * data as an argument and returns an object that can be placed onto the toolbar. Example:
 * <pre>
 * Ext.create('Ext.ux.ToolbarDroppable', {
 *   createItem: function(data) {
 *     return Ext.create('Ext.Button', {text: data.text});
 *   }
 * });
 * </pre>
 * The afterLayout function can also be overridden, and is called after a new item has been
 * created and inserted into the Toolbar. Use this for any logic that needs to be run after
 * the item has been created.
 */
 Ext.define('Ext.ux.ToolbarDroppable', {

    /**
     * Creates new ToolbarDroppable.
     * @param {Object} config Config options.
     */
    constructor: function(config) {
      Ext.apply(this, config);
    },

    /**
     * Initializes the plugin and saves a reference to the toolbar
     * @param {Ext.toolbar.Toolbar} toolbar The toolbar instance
     */
    init: function(toolbar) {
      /**
       * @property toolbar
       * @type Ext.toolbar.Toolbar
       * The toolbar instance that this plugin is tied to
       */
      this.toolbar = toolbar;

      this.toolbar.on({
          scope : this,
          render: this.createDropTarget
      });
    },

    /**
     * Creates a drop target on the toolbar
     */
    createDropTarget: function() {
        /**
         * @property dropTarget
         * @type Ext.dd.DropTarget
         * The drop target attached to the toolbar instance
         */
        this.dropTarget = Ext.create('Ext.dd.DropTarget', this.toolbar.getEl(), {
            notifyOver: Ext.Function.bind(this.notifyOver, this),
            notifyDrop: Ext.Function.bind(this.notifyDrop, this)
        });
    },

    /**
     * Adds the given DD Group to the drop target
     * @param {String} ddGroup The DD Group
     */
    addDDGroup: function(ddGroup) {
        this.dropTarget.addToGroup(ddGroup);
    },

    /**
     * Calculates the location on the toolbar to create the new sorter button based on the XY of the
     * drag event
     * @param {Ext.event.Event} e The event object
     * @return {Number} The index at which to insert the new button
     */    
    calculateEntryIndex: function(e) {
        var entryIndex = 0,
            toolbar = this.toolbar,
            items = toolbar.items.items,
            count = items.length,
            xHover = e.getXY()[0],
            index = 0,
            el, xTotal, width, midpoint;
 
        for (; index < count; index++) {
            el = items[index].getEl();
            xTotal = el.getXY()[0];
            width = el.getWidth();
            midpoint = xTotal + width / 2;
 
            if (xHover < midpoint) {
                entryIndex = index; 
                break;
            } else {
                entryIndex = index + 1;
            }
       }
       return entryIndex;
    },

    /**
     * Returns true if the drop is allowed on the drop target. This function can be overridden
     * and defaults to simply return true
     * @param {Object} data Arbitrary data from the drag source
     * @return {Boolean} True if the drop is allowed
     */
    canDrop: function(data) {
        return true;
    },

    /**
     * Custom notifyOver method which will be used in the plugin's internal DropTarget
     * @return {String} The CSS class to add
     */
    notifyOver: function(dragSource, event, data) {
        return this.canDrop.apply(this, arguments) ? this.dropTarget.dropAllowed : this.dropTarget.dropNotAllowed;
    },

    /**
     * Called when the drop has been made. Creates the new toolbar item, places it at the correct location
     * and calls the afterLayout callback.
     */
    notifyDrop: function(dragSource, event, data) {
        var canAdd = this.canDrop(dragSource, event, data),
            tbar   = this.toolbar;

        if (canAdd) {
            var entryIndex = this.calculateEntryIndex(event);

            tbar.insert(entryIndex, this.createItem(data));
            tbar.doLayout();

            this.afterLayout();
        }

        return canAdd;
    },

    /**
     * Creates the new toolbar item based on drop data. This method must be implemented by the plugin instance
     * @param {Object} data Arbitrary data from the drop
     * @return {Mixed} An item that can be added to a toolbar
     */
    createItem: function(data) {
        //<debug>
        Ext.Error.raise("The createItem method must be implemented in the ToolbarDroppable plugin");
        //</debug>
    },

    /**
     * Called after a new button has been created and added to the toolbar. Add any required cleanup logic here
     */
    afterLayout: Ext.emptyFn
});

/**
 * Created by user on 2015/1/17 0017.
 */
Ext.define('Ext.ux.grid.MultiFilter', {
    extend: 'Ext.container.Container',
    alias: 'plugin.gridmultifilter',
    layout: "hbox",
    dock: "top",
    baseCls: "saki-gms-ct",
    filterOnEnter: false,
    iconColumn: true,
    filterAfterRender: true,
    height: 21,
    weight: 1000,
    buffer: 500,
    clearItemT: "Clear Filter",
    clearItemIconCls: "icon-clear-filter",
    saveItemT: "Save Filter",
    saveItemIconCls: "icon-disk",
    init: function (a) {
        var b = this, c = a.getView().getHeaderCt();
        Ext.apply(b, {
            grid: a,
            store: a.getStore(),
            headerCt: c,
            values: {}
        });
        c.on({
            afterlayout: {
                fn: b.afterHdLayout,
                scope: b
            },
            afterrender: {
                fn: b.afterHdRender,
                scope: b,
                single: true
            },
            beforerender: {
                fn: b.beforeHdRender,
                scope: b,
                single: true
            },
            columnmove: {
                fn: b.onColumnMove,
                scope: b
            }
        });
        a.getFilter = function () {
            return b
        }
    },
    createFilterMenu: function () {
        var b = this, a;
        if (!b.filterMenu) {
            a = b.getSavedFilters();
            if (a.length) {
                a.push("-")
            }
            a.push({
                text: b.clearItemT,
                iconCls: b.clearItemIconCls,
                scope: b,
                handler: b.clearValues
            });
            b.filterMenu = Ext.widget("menu", {
                defaultAlign: "tr-br?",
                items: a
            })
        }
    },
    getSavedFilters: function () {
        return []
    },
    getFields: function () {
        var b = this, a = [];
        b.headerCt.items.each(function (e) {
            var d = e.filter, c = {xtype: "component"}, g = null;
            if (true === d) {
                c.xtype = "textfield"
            } else {
                if (d && d.isComponent) {
                    c = d
                } else {
                    if ("string" === typeof d) {
                        c.xtype = d
                    } else {
                        if (Ext.isObject(d)) {
                            Ext.apply(c, d)
                        } else {
                            c.cls = "saki-gms-nofilter";
                            c.height = b.height
                        }
                    }
                }
            }
            if ("iconCol" === e.itemId) {
                Ext.apply(c, {
                    autoEl: {
                        tag: "div",
                        children: [{
                            tag: "img",
                            src: "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
                            cls: "saki-gms-icon x-tool-img x-tool-gear"
                        }]
                    },
                    cls: "saki-gms-nofilter x-tool",
                    overCls: "x-tool-over",
                    listeners: {
                        click: {
                            fn: b.onIconClick,
                            scope: b,
                            element: "el"
                        }
                    }
                })
            }
            if ("component" !== c.xtype) {
                Ext.apply(c, {
                    itemId: e.dataIndex,
                    enableKeyEvents: true
                })
            }
            g = Ext.widget(c);
            if (g.isXType("combo")) {
                g.on("select", b.onFieldChange, b, {
                    buffer: b.buffer
                })
            } else {
                g.on("keyup", b.onFieldChange, b, {
                    buffer: b.filterOnEnter ? undefined : b.buffer
                });
                g.on("change", b.onFieldChange, b, {
                    buffer: b.filterOnEnter ? undefined : b.buffer
                })
            }
            a.push(g)
        });
        return a
    },
    onIconClick: function (c, a) {
        var b = this;
        if (b.filterMenu) {
            b.filterMenu.showBy(c.getTarget("div.x-tool"))
        }
    },
    onFieldChange: function (c, b) {
        var a = this, d = c.getRawValue();
        if (a.filterOnEnter && Ext.EventObject.ENTER !== a.getKey(b)) {
            return
        }
        a.doFilterChange();
        a.updateClearIcon(c)
    },
    getKey: function (a) {
        return a && Ext.isFunction(a.getKey) ? a.getKey() : false
    },
    isDirty: function () {
        var b = this,
            a = b.getValues(),
            c = Ext.encode(b.values) !== Ext.encode(a);
        return c
    },
    updateClearIcon: function (g) {
        var d = this,
            c = "saki-gms-hasvalue",
            a = g.bodyEl.down("input").up("div"),//up('td')
            e = g.getValue(),
            b;
        if (false !== g.clearIcon) {
            if (!g.clearIcon) {
                g.clearIcon = a.createChild({
                    tag: "div",
                    cls: "saki-gms-clear"
                });
                g.clearIcon.on("click", Ext.bind(d.clearField, d, [g]));
                a.applyStyles({
                    position: "relative"
                })
            }
            if (e && !g.readOnly && !g.disabled) {
                a.addCls(c)
            } else {
                a.removeCls(c)
            }
        }
        b = d.headerCt.items.getAt(d.items.indexOf(g)).getEl();
        if (e) {
            b.addCls("saki-gms-filtered")
        } else {
            b.removeCls("saki-gms-filtered")
        }
    },
    syncUi: function () {
        var a = this;
        a.items.each(function (b) {
            if (b && b.rendered && Ext.isFunction(b.getValue)) {
                a.updateClearIcon(b)
            }
        })
    },
    clearField: function (a) {
        if (a && Ext.isFunction(a.setValue) && !a.readOnly && !a.disabled) {
            a.setValue("");
            this.onFieldChange(a)
        }
        a.focus()
    },
    doFilterChange: function () {
        var b = this, a = b.store;
        if (!b.isDirty()) {
            return
        }
        b.values = b.getValues();
        if (a.filters) {
            a.filters.removeAll()
        }
        if (b.values) {
            a.filter(b.getFilters())
        } else {
            a.clearFilter()
        }
        b.syncUi()
    },
    getFilters: function () {
        var b = this, a = [];
        Ext.Object.each(b.values,
            function (c, e) {
                var g, d;
                g = b.items.get(c);
                d = {
                    property: c,
                    value: e
                };
                if (g && Ext.isFunction(g.filterFn)) {
                    d.filterFn = Ext.Function.bind(g.filterFn, null, [c, e], true)
                }
                a.push(d)
            });
        return a
    },
    setValues: function (a) {
        var b = this, c;
        if (a && Ext.isObject(a)) {
            b.clearValues(true);
            Ext.Object.each(a,
                function (d, e) {
                    c = b.items.get(d);
                    if (c && Ext.isFunction(c.setValue)) {
                        c.setValue(e)
                    }
                })
        }
        b.onFieldChange()
    },
    clearValues: function (a) {
        var b = this;
        b.items.each(function (c) {
            b.clearField(c)
        });
        if (!a) {
            b.doFilterChange()
        }
    },
    getValues: function () {
        var b = this, a = {}, d, c = true;
        b.items.each(function (e) {
            if (Ext.isFunction(e.getValue)) {
                d = e.getValue();
                if (d) {
                    a[e.itemId] = d;
                    c = false
                }
            }
        });
        return c ? null : a
    },
    syncCols: function () {
        var a = this, b = a.headerCt.items;
        b.each(function (c, d) {
            a.items.getAt(d).setWidth(c.getWidth())
        })
    },
    onGridScroll: function () {
        var b = this, a = b.grid.getView().getEl().getScroll();
        b.getLayout().innerCt.scrollTo("left", a.left)
    },
    onColumnMove: function (e, a, b, d) {
        var c = this;
        c.move(b, b > d ? d : d - 1);
        c.syncCols()
    },
    afterHdLayout: function () {
        var a = this;
        a.syncCols();
        a.syncUi()
    },
    beforeHdRender: function () {
        var a = this.headerCt;
        this.iconCol = a.add({
            width: 21,
            menuDisabled: true,
            hideable: false,
            sortable: false,
            itemId: "iconCol",
            draggable: false,
            hoverCls: "",
            baseCls: "",
            renderer: function (b, c) {
            }
        })
    },
    afterHdRender: function () {
        var b = this, a = b.grid;
        b.add(b.getFields());
        a.dockedItems.add(b);
        a.getView().on({
            bodyscroll: {
                fn: b.onGridScroll,
                scope: b
            }
        });
        if (b.isDirty() && b.filterAfterRender) {
            b.doFilterChange()
        }
        b.createFilterMenu()
    }
});


Ext.define('Ext.ux.grid.SimpleFilter', {
    extend: 'Ext.AbstractPlugin',
    alias: 'plugin.gridsimplefilter',
    targetCt: "toolbar[dock=bottom]",
    targetCtScope: "grid",
    autoCreate: true,
    searchPosition: "tbfill",
    triggerHidden: false,
    beforeSeparator: true,
    triggerSearch: "auto",
    minChars: 2,
    focusOnLoad: true,
    buttonHidden: false,
    buttonCls: "saki-gridsearch-btn",
    fontIcons: true,
    buttonGlyph: "xe800@fontello",
    mode: "remote",
    queryParam: "query",
    fieldsParam: "fields",
    checkIndexes: "all",
    disableIndexes: [],
    buffer: 400,
    inputType: "search",
    showSelectAll: true,
    noCtText: "Target container was not found. Check values of autoCreate and targetCt config options.",
    searchText: "Search",
    selectAllText: "Select all",
    autoTipText: "Type at least {0} characters",
    manualTipText: "Type a text and press Enter",
    init: function (b) {
        var a = this, c;
        a.callParent(arguments);
        a.targetCt = c = a.getTargetCt();
        if (!c) {
            Ext.Error.raise(a.noCtText)
        }
        a.disableIndexes = Ext.Array.slice(a.disableIndexes);
        a.createField();
        b.on("reconfigure", a.reconfigure, a)
    },
    doSearch: function (g) {
        var h = this, b = h.menu, i = h.field, k = h.getCmp().getStore(), e = k.getProxy(),
            a = h.getCmp(), j = h.queryParam, c = h.fieldsParam, d = b.getFields();
        if (g) {
            i.setRawValue(g)
        } else {
            g = i.getValue()
        }
        if ("remote" === h.mode) {
            delete e.extraParams[j];
            delete e.extraParams[c];
            if (g) {
                e.extraParams[j] = g
            }
            if (d) {
                e.extraParams[c] = Ext.encode(d)
            }
            k.loadPage(1)
        } else {
            if (d) {
                k.clearFilter();
                if (g) {
                    k.filterBy(function (n) {
                        var m = false,
                            o, p, l = h.dateFormat;
                        Ext.each(d,
                            function (q) {
                                if (m) {
                                    return
                                }
                                o = n.get(q);
                                if (Ext.isDate(o)) {
                                    l = l || a.headerCt.items.findBy(function (r) {
                                        return r.dataIndex === q
                                    }).format;
                                    l = l || n.fields.get(q).dateFormat;
                                    l = l || Ext.Date.defaultFormat;
                                    o = Ext.Date.format(o, l)
                                }
                                p = new RegExp(h.escapeRegExp(g), "gi");
                                m = p.test(o)
                            });
                        return !!m
                    })
                }
            }
        }
    },
    reconfigure: function () {
        var d = this,
            c = d.getCmp(),
            a = c.getStore(),
            b = c.headerCt.items,
            g = d.menu,
            e = "radio" === d.menuStyle ? "g" + (new Date()).getTime() : undefined;
        g.removeAll();
        if (d.showSelectAll) {
            g.add([{
                xtype: "menucheckitem",
                text: d.selectAllText,
                checked: "all" === d.checkIndexes,
                group: e,
                handler: function (h) {
                    h.parentMenu.items.each(function (i) {
                        if (i.setChecked && !i.isDisabled() && i !== h) {
                            i.setChecked(h.checked, true)
                        }
                    })
                }
            },
                "-"])
        }
        b.each(function (h) {
            var i = "all" === d.checkIndexes || Ext.Array.contains(d.checkIndexes, h.dataIndex);
            if (h.text && h.dataIndex && !Ext.Array.contains(d.disableIndexes, h.dataIndex)) {
                g.add({
                    xtype: "menucheckitem",
                    text: h.text,
                    group: e,
                    checked: i,
                    dataIndex: h.dataIndex
                })
            }
        });
        if (d.focusOnLoad) {
            a.on({
                load: {
                    fn: function () {
                        d.field.focus()
                    },
                    delay: 100
                }
            })
        }
        a.setProxy(a.getProxy().clone())
    },
    createField: function () {
        var c = this, e = c.targetCt, a = c.searchPosition, d = c.createAdder(), b = [];
        if ("last" === a && "right" === c.searchAlign) {
            b.push("->")
        }
        if (c.beforeSeparator) {
            b.push("-")
        }
        c.menu = Ext.widget({
            xtype: "menu",
            listeners: {
                scope: c,
                hide: c.onMenuHide,
                show: c.onMenuShow
            },
            getFields: function () {
                var h = this, g = [];
                h.items.each(function (i) {
                    if (i.checked && i.dataIndex) {
                        g.push(i.dataIndex)
                    }
                });
                return g
            }
        });
        b.push({
            xtype: "button",
            text: c.searchText,
            menu: c.menu,
            hidden: c.buttonHidden,
            cls: c.buttonCls,
            glyph: c.fontIcons ? c.buttonGlyph : undefined,
            iconCls: c.fontIcons ? undefined : c.buttonIconCls
        });
        b.push({
            xtype: "triggerfield",
            inputType: c.inputType,
            inputCls: "x-form-text",
            isFormField: false,
            fieldStyle: "-webkit-appearance:textfield",
            hideTrigger: c.triggerHidden || "auto" === c.triggerSearch,
            triggerCls: "x-form-search-trigger",
            onTriggerClick: Ext.Function.bind(c.doSearch, c, []),
            listeners: {
                scope: c,
                buffer: c.buffer,
                change: c.onChange,
                specialkey: c.onSpecialKey,
                render: c.onFieldRender
            }
        });
        if (c.afterSeparator) {
            b.push("-")
        }
        d(b);
        Ext.apply(c, {
            field: e.down("triggerfield[inputType=" + c.inputType + "]"),
            button: e.down("button[cls=" + c.buttonCls + "]")
        });
        c.reconfigure()
    },
    onFieldRender: function (b) {
        var a = this;
        if (!a.disableTip) {
            Ext.tip.QuickTipManager.register({
                target: b.inputEl.dom,
                text: "auto" === a.triggerSearch ? Ext.String.format(a.autoTipText, a.minChars) : a.manualTipText
            })
        }
        if ("search" === a.inputType) {
        }
    },
    onMenuHide: function (c) {
        var b = this, a = c.getFields();
        if (Ext.encode(b.lastFields) !== Ext.encode(a) && a.length && b.field.getValue()) {
            b.doSearch()
        }
        b.setFieldDisabled(!a.length)
    },
    onMenuShow: function (a) {
        this.lastFields = a.getFields()
    },
    onSpecialKey: function (b, a) {
        if (a.getKey() == a.ENTER) {
            this.doSearch()
        }
    },
    onChange: function (d) {
        var b = this, c = d.getValue(), a = b.minChars;
        if ("auto" === b.triggerSearch && a && c.length >= a || 0 === c.length) {
            b.doSearch()
        }
    },
    createAdder: function () {
        var d = this, a = d.searchPosition, e = d.targetCt, c, b;
        if (Ext.isNumber(a)) {
            return Ext.Function.bind(e.insert, e, [a], 0)
        }
        if ("first" === a) {
            return Ext.Function.bind(e.insert, e, [0], 0)
        }
        if ("last" === a) {
            return Ext.Function.bind(e.add, e)
        }
        c = e.down(a);
        if (c) {
            b = e.items.indexOf(c);
            return Ext.Function.bind(e.insert, e, [b], 0)
        } else {
            return Ext.Function.bind(e.add, e)
        }
    },
    getTargetCt: function () {
        var c = this, b = c.getCmp(), d = "global" === c.targetCtScope ? Ext.ComponentQuery.query(c.targetCt)[0] : b.down(c.targetCt), a;
        if (!d && c.autoCreate) {
            a = c.targetCt.match(/(top|left|bottom|right)/);
            a = a ? a[0] : "bottom";
            d = b.dockedItems.add(Ext.widget({
                xtype: "toolbar",
                dock: a
            }))
        }
        return d
    },
    isDisabled: function () {
        return this.field.isDisabled()
    },
    isVisible: function () {
        return this.field.isVisible()
    },
    setButtonDisabled: function (a) {
        this.button.setDisabled(a)
    },
    disableButton: function () {
        this.button.disable()
    },
    enableButton: function () {
        this.button.enable()
    },
    setFieldDisabled: function (a) {
        this.field.setDisabled(a)
    },
    disableField: function () {
        this.field.disable()
    },
    enableField: function () {
        this.field.enable()
    },
    setDisabled: function (a) {
        var b = this;
        b.setButtonDisabled(a);
        b.setFieldDisabled(a)
    },
    disable: function () {
        var a = this;
        a.disableButton();
        a.disableField()
    },
    enable: function () {
        var a = this;
        a.enableButton();
        a.enableField()
    },
    setHidden: function (b) {
        var a = this;
        a.setButtonHidden(b);
        a.setFieldHidden(b)
    },
    hide: function () {
        this.setHidden(true)
    },
    show: function () {
        this.setHidden(false)
    },
    setButtonHidden: function (b) {
        var a = this;
        if (b) {
            a.button.hide()
        } else {
            a.button.show()
        }
    },
    hideButton: function () {
        this.setButtonHidden(true)
    },
    showButton: function () {
        this.setButtonHidden(false)
    },
    setFieldHidden: function (b) {
        var a = this;
        if (b) {
            a.field.hide()
        } else {
            a.field.show()
        }
    },
    hideField: function () {
        this.setFieldHidden(true)
    },
    showField: function () {
        this.setFieldHidden(false)
    },
    escapeRegExp: function (a) {
        if ("string" !== typeof a) {
            return a
        }
        return a.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g, "\\$1")
    }
});

