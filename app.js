$(document).ready(function () {
    // pricing slider script

    ! function (a) {
        "function" == typeof define && define.amd ? define(["jquery"], function (b) {
            return a(b, document, window, navigator)
        }) : "object" == typeof exports ? a(require("jquery"), document, window, navigator) : a(jQuery, document, window, navigator)
    }(function (a, b, c, d, e) {
        "use strict";
        var f = 0,
            g = function () {
                var b, c = d.userAgent,
                    e = /msie\s\d+/i;
                return c.search(e) > 0 && (b = e.exec(c).toString(), (b = b.split(" ")[1]) < 9) && (a("html").addClass("lt-ie9"), !0)
            }();
        Function.prototype.bind || (Function.prototype.bind = function (a) {
            var b = this,
                c = [].slice;
            if ("function" != typeof b) throw new TypeError;
            var d = c.call(arguments, 1),
                e = function () {
                    if (this instanceof e) {
                        var f = function () { };
                        f.prototype = b.prototype;
                        var g = new f,
                            h = b.apply(g, d.concat(c.call(arguments)));
                        return Object(h) === h ? h : g
                    }
                    return b.apply(a, d.concat(c.call(arguments)))
                };
            return e
        }), Array.prototype.indexOf || (Array.prototype.indexOf = function (a, b) {
            var c;
            if (null == this) throw new TypeError('"this" is null or not defined');
            var d = Object(this),
                e = d.length >>> 0;
            if (0 === e) return -1;
            var f = +b || 0;
            if (Math.abs(f) === 1 / 0 && (f = 0), f >= e) return -1;
            for (c = Math.max(f >= 0 ? f : e - Math.abs(f), 0); c < e;) {
                if (c in d && d[c] === a) return c;
                c++
            }
            return -1
        });
        var h = function (d, f, g) {
            this.VERSION = "2.2.0", this.input = d, this.plugin_count = g, this.current_plugin = 0, this.calc_count = 0, this.update_tm = 0, this.old_from = 0, this.old_to = 0, this.old_min_interval = null, this.raf_id = null, this.dragging = !1, this.force_redraw = !1, this.no_diapason = !1, this.has_tab_index = !0, this.is_key = !1, this.is_update = !1, this.is_start = !0, this.is_finish = !1, this.is_active = !1, this.is_resize = !1, this.is_click = !1, f = f || {}, this.$cache = {
                win: a(c),
                body: a(b.body),
                input: a(d),
                cont: null,
                rs: null,
                min: null,
                max: null,
                from: null,
                to: null,
                single: null,
                bar: null,
                line: null,
                s_single: null,
                s_from: null,
                s_to: null,
                shad_single: null,
                shad_from: null,
                shad_to: null,
                edge: null,
                grid: null,
                grid_labels: []
            }, this.coords = {
                x_gap: 0,
                x_pointer: 0,
                w_rs: 0,
                w_rs_old: 0,
                w_handle: 0,
                p_gap: 0,
                p_gap_left: 0,
                p_gap_right: 0,
                p_step: 0,
                p_pointer: 0,
                p_handle: 0,
                p_single_fake: 0,
                p_single_real: 0,
                p_from_fake: 0,
                p_from_real: 0,
                p_to_fake: 0,
                p_to_real: 0,
                p_bar_x: 0,
                p_bar_w: 0,
                grid_gap: 0,
                big_num: 0,
                big: [],
                big_w: [],
                big_p: [],
                big_x: []
            }, this.labels = {
                w_min: 0,
                w_max: 0,
                w_from: 0,
                w_to: 0,
                w_single: 0,
                p_min: 0,
                p_max: 0,
                p_from_fake: 0,
                p_from_left: 0,
                p_to_fake: 0,
                p_to_left: 0,
                p_single_fake: 0,
                p_single_left: 0
            };
            var h, i, j, k = this.$cache.input,
                l = k.prop("value");
            h = {
                type: "single",
                min: 10,
                max: 100,
                from: null,
                to: null,
                step: 1,
                min_interval: 0,
                max_interval: 0,
                drag_interval: !1,
                values: [],
                p_values: [],
                from_fixed: !1,
                from_min: null,
                from_max: null,
                from_shadow: !1,
                to_fixed: !1,
                to_min: null,
                to_max: null,
                to_shadow: !1,
                prettify_enabled: !0,
                prettify_separator: " ",
                prettify: null,
                force_edges: !1,
                keyboard: !0,
                grid: !1,
                grid_margin: !0,
                grid_num: 4,
                grid_snap: !1,
                hide_min_max: !1,
                hide_from_to: !1,
                prefix: "",
                postfix: "",
                max_postfix: "",
                decorate_both: !0,
                values_separator: " â€” ",
                input_values_separator: ";",
                disable: !1,
                block: !1,
                extra_classes: "",
                scope: null,
                onStart: null,
                onChange: null,
                onFinish: null,
                onUpdate: null
            }, "INPUT" !== k[0].nodeName && console && console.warn && console.warn("Base element should be <input>!", k[0]), i = {
                type: k.data("type"),
                min: k.data("min"),
                max: k.data("max"),
                from: k.data("from"),
                to: k.data("to"),
                step: k.data("step"),
                min_interval: k.data("minInterval"),
                max_interval: k.data("maxInterval"),
                drag_interval: k.data("dragInterval"),
                values: k.data("values"),
                from_fixed: k.data("fromFixed"),
                from_min: k.data("fromMin"),
                from_max: k.data("fromMax"),
                from_shadow: k.data("fromShadow"),
                to_fixed: k.data("toFixed"),
                to_min: k.data("toMin"),
                to_max: k.data("toMax"),
                to_shadow: k.data("toShadow"),
                prettify_enabled: k.data("prettifyEnabled"),
                prettify_separator: k.data("prettifySeparator"),
                force_edges: k.data("forceEdges"),
                keyboard: k.data("keyboard"),
                grid: k.data("grid"),
                grid_margin: k.data("gridMargin"),
                grid_num: k.data("gridNum"),
                grid_snap: k.data("gridSnap"),
                hide_min_max: k.data("hideMinMax"),
                hide_from_to: k.data("hideFromTo"),
                prefix: k.data("prefix"),
                postfix: k.data("postfix"),
                max_postfix: k.data("maxPostfix"),
                decorate_both: k.data("decorateBoth"),
                values_separator: k.data("valuesSeparator"),
                input_values_separator: k.data("inputValuesSeparator"),
                disable: k.data("disable"),
                block: k.data("block"),
                extra_classes: k.data("extraClasses")
            }, i.values = i.values && i.values.split(",");
            for (j in i) i.hasOwnProperty(j) && (i[j] !== e && "" !== i[j] || delete i[j]);
            l !== e && "" !== l && (l = l.split(i.input_values_separator || f.input_values_separator || ";"), l[0] && l[0] == +l[0] && (l[0] = +l[0]), l[1] && l[1] == +l[1] && (l[1] = +l[1]), f && f.values && f.values.length ? (h.from = l[0] && f.values.indexOf(l[0]), h.to = l[1] && f.values.indexOf(l[1])) : (h.from = l[0] && +l[0], h.to = l[1] && +l[1])), a.extend(h, f), a.extend(h, i), this.options = h, this.update_check = {}, this.validate(), this.result = {
                input: this.$cache.input,
                slider: null,
                min: this.options.min,
                max: this.options.max,
                from: this.options.from,
                from_percent: 0,
                from_value: null,
                to: this.options.to,
                to_percent: 0,
                to_value: null
            }, this.init()
        };
        h.prototype = {
            init: function (a) {
                this.no_diapason = !1, this.coords.p_step = this.convertToPercent(this.options.step, !0), this.target = "base", this.toggleInput(), this.append(), this.setMinMax(), a ? (this.force_redraw = !0, this.calc(!0), this.callOnUpdate()) : (this.force_redraw = !0, this.calc(!0), this.callOnStart()), this.updateScene()
            },
            append: function () {
                var a = '<span class="irs js-irs-' + this.plugin_count + " " + this.options.extra_classes + '"></span>';
                this.$cache.input.before(a), this.$cache.input.prop("readonly", !0), this.$cache.cont = this.$cache.input.prev(), this.result.slider = this.$cache.cont, this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="0"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>'), this.$cache.rs = this.$cache.cont.find(".irs"), this.$cache.min = this.$cache.cont.find(".irs-min"), this.$cache.max = this.$cache.cont.find(".irs-max"), this.$cache.from = this.$cache.cont.find(".irs-from"), this.$cache.to = this.$cache.cont.find(".irs-to"), this.$cache.single = this.$cache.cont.find(".irs-single"), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.line = this.$cache.cont.find(".irs-line"), this.$cache.grid = this.$cache.cont.find(".irs-grid"), "single" === this.options.type ? (this.$cache.cont.append('<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>'), this.$cache.edge = this.$cache.cont.find(".irs-bar-edge"), this.$cache.s_single = this.$cache.cont.find(".single"), this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.shad_single = this.$cache.cont.find(".shadow-single")) : (this.$cache.cont.append('<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>'), this.$cache.s_from = this.$cache.cont.find(".from"), this.$cache.s_to = this.$cache.cont.find(".to"), this.$cache.shad_from = this.$cache.cont.find(".shadow-from"), this.$cache.shad_to = this.$cache.cont.find(".shadow-to"), this.setTopHandler()), this.options.hide_from_to && (this.$cache.from[0].style.display = "none", this.$cache.to[0].style.display = "none", this.$cache.single[0].style.display = "none"), this.appendGrid(), this.options.disable ? (this.appendDisableMask(), this.$cache.input[0].disabled = !0) : (this.$cache.input[0].disabled = !1, this.removeDisableMask(), this.bindEvents()), this.options.disable || (this.options.block ? this.appendDisableMask() : this.removeDisableMask()), this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize")
            },
            setTopHandler: function () {
                var a = this.options.min,
                    b = this.options.max,
                    c = this.options.from,
                    d = this.options.to;
                c > a && d === b ? this.$cache.s_from.addClass("type_last") : d < b && this.$cache.s_to.addClass("type_last")
            },
            changeLevel: function (a) {
                switch (a) {
                    case "single":
                        this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake), this.$cache.s_single.addClass("state_hover");
                        break;
                    case "from":
                        this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.$cache.s_from.addClass("state_hover"), this.$cache.s_from.addClass("type_last"), this.$cache.s_to.removeClass("type_last");
                        break;
                    case "to":
                        this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake), this.$cache.s_to.addClass("state_hover"), this.$cache.s_to.addClass("type_last"), this.$cache.s_from.removeClass("type_last");
                        break;
                    case "both":
                        this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer), this.$cache.s_to.removeClass("type_last"), this.$cache.s_from.removeClass("type_last")
                }
            },
            appendDisableMask: function () {
                this.$cache.cont.append('<span class="irs-disable-mask"></span>'), this.$cache.cont.addClass("irs-disabled")
            },
            removeDisableMask: function () {
                this.$cache.cont.remove(".irs-disable-mask"), this.$cache.cont.removeClass("irs-disabled")
            },
            remove: function () {
                this.$cache.cont.remove(), this.$cache.cont = null, this.$cache.line.off("keydown.irs_" + this.plugin_count), this.$cache.body.off("touchmove.irs_" + this.plugin_count), this.$cache.body.off("mousemove.irs_" + this.plugin_count), this.$cache.win.off("touchend.irs_" + this.plugin_count), this.$cache.win.off("mouseup.irs_" + this.plugin_count), g && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count)), this.$cache.grid_labels = [], this.coords.big = [], this.coords.big_w = [], this.coords.big_p = [], this.coords.big_x = [], cancelAnimationFrame(this.raf_id)
            },
            bindEvents: function () {
                this.no_diapason || (this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("focus.irs_" + this.plugin_count, this.pointerFocus.bind(this)), this.options.drag_interval && "double" === this.options.type ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"))) : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), "single" === this.options.type ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))) : (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), this.options.keyboard && this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard")), g && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this))))
            },
            pointerFocus: function (a) {
                if (!this.target) {
                    var b, c;
                    c = "single" === this.options.type ? this.$cache.single : this.$cache.from, b = c.offset().left, b += c.width() / 2 - 1, this.pointerClick("single", {
                        preventDefault: function () { },
                        pageX: b
                    })
                }
            },
            pointerMove: function (a) {
                if (this.dragging) {
                    var b = a.pageX || a.originalEvent.touches && a.originalEvent.touches[0].pageX;
                    this.coords.x_pointer = b - this.coords.x_gap, this.calc()
                }
            },
            pointerUp: function (b) {
                this.current_plugin === this.plugin_count && this.is_active && (this.is_active = !1, this.$cache.cont.find(".state_hover").removeClass("state_hover"), this.force_redraw = !0, g && a("*").prop("unselectable", !1), this.updateScene(), this.restoreOriginalMinInterval(), (a.contains(this.$cache.cont[0], b.target) || this.dragging) && this.callOnFinish(), this.dragging = !1)
            },
            pointerDown: function (b, c) {
                c.preventDefault();
                var d = c.pageX || c.originalEvent.touches && c.originalEvent.touches[0].pageX;
                2 !== c.button && ("both" === b && this.setTempMinInterval(), b || (b = this.target || "from"), this.current_plugin = this.plugin_count, this.target = b, this.is_active = !0, this.dragging = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = d - this.coords.x_gap, this.calcPointerPercent(), this.changeLevel(b), g && a("*").prop("unselectable", !0), this.$cache.line.trigger("focus"), this.updateScene())
            },
            pointerClick: function (a, b) {
                b.preventDefault();
                var c = b.pageX || b.originalEvent.touches && b.originalEvent.touches[0].pageX;
                2 !== b.button && (this.current_plugin = this.plugin_count, this.target = a, this.is_click = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = +(c - this.coords.x_gap).toFixed(), this.force_redraw = !0, this.calc(), this.$cache.line.trigger("focus"))
            },
            key: function (a, b) {
                if (!(this.current_plugin !== this.plugin_count || b.altKey || b.ctrlKey || b.shiftKey || b.metaKey)) {
                    switch (b.which) {
                        case 83:
                        case 65:
                        case 40:
                        case 37:
                            b.preventDefault(), this.moveByKey(!1);
                            break;
                        case 87:
                        case 68:
                        case 38:
                        case 39:
                            b.preventDefault(), this.moveByKey(!0)
                    }
                    return !0
                }
            },
            moveByKey: function (a) {
                var b = this.coords.p_pointer,
                    c = (this.options.max - this.options.min) / 100;
                c = this.options.step / c, a ? b += c : b -= c, this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * b), this.is_key = !0, this.calc()
            },
            setMinMax: function () {
                if (this.options) {
                    if (this.options.hide_min_max) return this.$cache.min[0].style.display = "none", void (this.$cache.max[0].style.display = "none");
                    if (this.options.values.length) this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]));
                    else {
                        var a = this._prettify(this.options.min),
                            b = this._prettify(this.options.max);
                        this.result.min_pretty = a, this.result.max_pretty = b, this.$cache.min.html(this.decorate(a, this.options.min)), this.$cache.max.html(this.decorate(b, this.options.max))
                    }
                    this.labels.w_min = this.$cache.min.outerWidth(!1), this.labels.w_max = this.$cache.max.outerWidth(!1)
                }
            },
            setTempMinInterval: function () {
                var a = this.result.to - this.result.from;
                null === this.old_min_interval && (this.old_min_interval = this.options.min_interval), this.options.min_interval = a
            },
            restoreOriginalMinInterval: function () {
                null !== this.old_min_interval && (this.options.min_interval = this.old_min_interval, this.old_min_interval = null)
            },
            calc: function (a) {
                if (this.options && (this.calc_count++ , (10 === this.calc_count || a) && (this.calc_count = 0, this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.calcHandlePercent()), this.coords.w_rs)) {
                    this.calcPointerPercent();
                    var b = this.getHandleX();
                    switch ("both" === this.target && (this.coords.p_gap = 0, b = this.getHandleX()), "click" === this.target && (this.coords.p_gap = this.coords.p_handle / 2, b = this.getHandleX(), this.options.drag_interval ? this.target = "both_one" : this.target = this.chooseHandle(b)), this.target) {
                        case "base":
                            var c = (this.options.max - this.options.min) / 100,
                                d = (this.result.from - this.options.min) / c,
                                e = (this.result.to - this.options.min) / c;
                            this.coords.p_single_real = this.toFixed(d), this.coords.p_from_real = this.toFixed(d), this.coords.p_to_real = this.toFixed(e), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real), this.target = null;
                            break;
                        case "single":
                            if (this.options.from_fixed) break;
                            this.coords.p_single_real = this.convertToRealPercent(b), this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
                            break;
                        case "from":
                            if (this.options.from_fixed) break;
                            this.coords.p_from_real = this.convertToRealPercent(b), this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
                            break;
                        case "to":
                            if (this.options.to_fixed) break;
                            this.coords.p_to_real = this.convertToRealPercent(b), this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                            break;
                        case "both":
                            if (this.options.from_fixed || this.options.to_fixed) break;
                            b = this.toFixed(b + .001 * this.coords.p_handle), this.coords.p_from_real = this.convertToRealPercent(b) - this.coords.p_gap_left, this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.convertToRealPercent(b) + this.coords.p_gap_right, this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                            break;
                        case "both_one":
                            if (this.options.from_fixed || this.options.to_fixed) break;
                            var f = this.convertToRealPercent(b),
                                g = this.result.from_percent,
                                h = this.result.to_percent,
                                i = h - g,
                                j = i / 2,
                                k = f - j,
                                l = f + j;
                            k < 0 && (k = 0, l = k + i), l > 100 && (l = 100, k = l - i), this.coords.p_from_real = this.calcWithStep(k), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.calcWithStep(l), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real)
                    }
                    "single" === this.options.type ? (this.coords.p_bar_x = this.coords.p_handle / 2, this.coords.p_bar_w = this.coords.p_single_fake, this.result.from_percent = this.coords.p_single_real, this.result.from = this.convertToValue(this.coords.p_single_real), this.result.from_pretty = this._prettify(this.result.from), this.options.values.length && (this.result.from_value = this.options.values[this.result.from])) : (this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2), this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake), this.result.from_percent = this.coords.p_from_real, this.result.from = this.convertToValue(this.coords.p_from_real), this.result.from_pretty = this._prettify(this.result.from), this.result.to_percent = this.coords.p_to_real, this.result.to = this.convertToValue(this.coords.p_to_real), this.result.to_pretty = this._prettify(this.result.to), this.options.values.length && (this.result.from_value = this.options.values[this.result.from], this.result.to_value = this.options.values[this.result.to])), this.calcMinMax(), this.calcLabels()
                }
            },
            calcPointerPercent: function () {
                if (!this.coords.w_rs) return void (this.coords.p_pointer = 0);
                this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer) ? this.coords.x_pointer = 0 : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs), this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100)
            },
            convertToRealPercent: function (a) {
                return a / (100 - this.coords.p_handle) * 100
            },
            convertToFakePercent: function (a) {
                return a / 100 * (100 - this.coords.p_handle)
            },
            getHandleX: function () {
                var a = 100 - this.coords.p_handle,
                    b = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
                return b < 0 ? b = 0 : b > a && (b = a), b
            },
            calcHandlePercent: function () {
                "single" === this.options.type ? this.coords.w_handle = this.$cache.s_single.outerWidth(!1) : this.coords.w_handle = this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100)
            },
            chooseHandle: function (a) {
                return "single" === this.options.type ? "single" : a >= this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2 ? this.options.to_fixed ? "from" : "to" : this.options.from_fixed ? "to" : "from"
            },
            calcMinMax: function () {
                this.coords.w_rs && (this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100, this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100)
            },
            calcLabels: function () {
                this.coords.w_rs && !this.options.hide_from_to && ("single" === this.options.type ? (this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake)) : (this.labels.w_from = this.$cache.from.outerWidth(!1), this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100, this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2, this.labels.p_from_left = this.toFixed(this.labels.p_from_left), this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake), this.labels.w_to = this.$cache.to.outerWidth(!1), this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100, this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2, this.labels.p_to_left = this.toFixed(this.labels.p_to_left), this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake), this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.toFixed(this.labels.p_single_left), this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake)))
            },
            updateScene: function () {
                this.raf_id && (cancelAnimationFrame(this.raf_id), this.raf_id = null), clearTimeout(this.update_tm), this.update_tm = null, this.options && (this.drawHandles(), this.is_active ? this.raf_id = requestAnimationFrame(this.updateScene.bind(this)) : this.update_tm = setTimeout(this.updateScene.bind(this), 300))
            },
            drawHandles: function () {
                this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_rs !== this.coords.w_rs_old && (this.target = "base", this.is_resize = !0), (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) && (this.setMinMax(), this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), this.force_redraw = !0, this.coords.w_rs_old = this.coords.w_rs, this.drawShadow()), this.coords.w_rs && (this.dragging || this.force_redraw || this.is_key) && ((this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) && (this.drawLabels(), this.$cache.bar[0].style.left = this.coords.p_bar_x + "%", this.$cache.bar[0].style.width = this.coords.p_bar_w + "%", "single" === this.options.type ? (this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%", this.$cache.single[0].style.left = this.labels.p_single_left + "%") : (this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%", this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%", (this.old_from !== this.result.from || this.force_redraw) && (this.$cache.from[0].style.left = this.labels.p_from_left + "%"), (this.old_to !== this.result.to || this.force_redraw) && (this.$cache.to[0].style.left = this.labels.p_to_left + "%"), this.$cache.single[0].style.left = this.labels.p_single_left + "%"), this.writeToInput(), this.old_from === this.result.from && this.old_to === this.result.to || this.is_start || (this.$cache.input.trigger("change"), this.$cache.input.trigger("input")), this.old_from = this.result.from, this.old_to = this.result.to, this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange(), (this.is_key || this.is_click) && (this.is_key = !1, this.is_click = !1, this.callOnFinish()), this.is_update = !1, this.is_resize = !1, this.is_finish = !1), this.is_start = !1, this.is_key = !1, this.is_click = !1, this.force_redraw = !1))
            },
            drawLabels: function () {
                if (this.options) {
                    var a, b, c, d, e, f = this.options.values.length,
                        g = this.options.p_values;
                    if (!this.options.hide_from_to)
                        if ("single" === this.options.type) f ? (a = this.decorate(g[this.result.from]), this.$cache.single.html(a)) : (d = this._prettify(this.result.from), a = this.decorate(d, this.result.from), this.$cache.single.html(a)), this.calcLabels(), this.labels.p_single_left < this.labels.p_min + 1 ? this.$cache.min[0].style.visibility = "hidden" : this.$cache.min[0].style.visibility = "visible", this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1 ? this.$cache.max[0].style.visibility = "hidden" : this.$cache.max[0].style.visibility = "visible";
                        else {
                            f ? (this.options.decorate_both ? (a = this.decorate(g[this.result.from]), a += this.options.values_separator, a += this.decorate(g[this.result.to])) : a = this.decorate(g[this.result.from] + this.options.values_separator + g[this.result.to]), b = this.decorate(g[this.result.from]), c = this.decorate(g[this.result.to]), this.$cache.single.html(a), this.$cache.from.html(b), this.$cache.to.html(c)) : (d = this._prettify(this.result.from), e = this._prettify(this.result.to), this.options.decorate_both ? (a = this.decorate(d, this.result.from), a += this.options.values_separator, a += this.decorate(e, this.result.to)) : a = this.decorate(d + this.options.values_separator + e, this.result.to), b = this.decorate(d, this.result.from), c = this.decorate(e, this.result.to), this.$cache.single.html(a), this.$cache.from.html(b), this.$cache.to.html(c)), this.calcLabels();
                            var h = Math.min(this.labels.p_single_left, this.labels.p_from_left),
                                i = this.labels.p_single_left + this.labels.p_single_fake,
                                j = this.labels.p_to_left + this.labels.p_to_fake,
                                k = Math.max(i, j);
                            this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left ? (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", this.result.from === this.result.to ? ("from" === this.target ? this.$cache.from[0].style.visibility = "visible" : "to" === this.target ? this.$cache.to[0].style.visibility = "visible" : this.target || (this.$cache.from[0].style.visibility = "visible"), this.$cache.single[0].style.visibility = "hidden", k = j) : (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", k = Math.max(i, j))) : (this.$cache.from[0].style.visibility = "visible", this.$cache.to[0].style.visibility = "visible", this.$cache.single[0].style.visibility = "hidden"), h < this.labels.p_min + 1 ? this.$cache.min[0].style.visibility = "hidden" : this.$cache.min[0].style.visibility = "visible", k > 100 - this.labels.p_max - 1 ? this.$cache.max[0].style.visibility = "hidden" : this.$cache.max[0].style.visibility = "visible"
                        }
                }
            },
            drawShadow: function () {
                var a, b, c, d, e = this.options,
                    f = this.$cache,
                    g = "number" == typeof e.from_min && !isNaN(e.from_min),
                    h = "number" == typeof e.from_max && !isNaN(e.from_max),
                    i = "number" == typeof e.to_min && !isNaN(e.to_min),
                    j = "number" == typeof e.to_max && !isNaN(e.to_max);
                "single" === e.type ? e.from_shadow && (g || h) ? (a = this.convertToPercent(g ? e.from_min : e.min), b = this.convertToPercent(h ? e.from_max : e.max) - a, a = this.toFixed(a - this.coords.p_handle / 100 * a), b = this.toFixed(b - this.coords.p_handle / 100 * b), a += this.coords.p_handle / 2, f.shad_single[0].style.display = "block", f.shad_single[0].style.left = a + "%", f.shad_single[0].style.width = b + "%") : f.shad_single[0].style.display = "none" : (e.from_shadow && (g || h) ? (a = this.convertToPercent(g ? e.from_min : e.min), b = this.convertToPercent(h ? e.from_max : e.max) - a, a = this.toFixed(a - this.coords.p_handle / 100 * a), b = this.toFixed(b - this.coords.p_handle / 100 * b), a += this.coords.p_handle / 2, f.shad_from[0].style.display = "block", f.shad_from[0].style.left = a + "%", f.shad_from[0].style.width = b + "%") : f.shad_from[0].style.display = "none", e.to_shadow && (i || j) ? (c = this.convertToPercent(i ? e.to_min : e.min), d = this.convertToPercent(j ? e.to_max : e.max) - c, c = this.toFixed(c - this.coords.p_handle / 100 * c), d = this.toFixed(d - this.coords.p_handle / 100 * d), c += this.coords.p_handle / 2, f.shad_to[0].style.display = "block", f.shad_to[0].style.left = c + "%", f.shad_to[0].style.width = d + "%") : f.shad_to[0].style.display = "none")
            },
            writeToInput: function () {
                "single" === this.options.type ? (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from)) : (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value) : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to), this.$cache.input.data("from", this.result.from), this.$cache.input.data("to", this.result.to))
            },
            callOnStart: function () {
                this.writeToInput(), this.options.onStart && "function" == typeof this.options.onStart && (this.options.scope ? this.options.onStart.call(this.options.scope, this.result) : this.options.onStart(this.result))
            },
            callOnChange: function () {
                this.writeToInput(), this.options.onChange && "function" == typeof this.options.onChange && (this.options.scope ? this.options.onChange.call(this.options.scope, this.result) : this.options.onChange(this.result))
            },
            callOnFinish: function () {
                this.writeToInput(), this.options.onFinish && "function" == typeof this.options.onFinish && (this.options.scope ? this.options.onFinish.call(this.options.scope, this.result) : this.options.onFinish(this.result))
            },
            callOnUpdate: function () {
                this.writeToInput(),
                    this.options.onUpdate && "function" == typeof this.options.onUpdate && (this.options.scope ? this.options.onUpdate.call(this.options.scope, this.result) : this.options.onUpdate(this.result))
            },
            toggleInput: function () {
                this.$cache.input.toggleClass("irs-hidden-input"), this.has_tab_index ? this.$cache.input.prop("tabindex", -1) : this.$cache.input.removeProp("tabindex"), this.has_tab_index = !this.has_tab_index
            },
            convertToPercent: function (a, b) {
                var c, d, e = this.options.max - this.options.min,
                    f = e / 100;
                return e ? (c = b ? a : a - this.options.min, d = c / f, this.toFixed(d)) : (this.no_diapason = !0, 0)
            },
            convertToValue: function (a) {
                var b, c, d = this.options.min,
                    e = this.options.max,
                    f = d.toString().split(".")[1],
                    g = e.toString().split(".")[1],
                    h = 0,
                    i = 0;
                if (0 === a) return this.options.min;
                if (100 === a) return this.options.max;
                f && (b = f.length, h = b), g && (c = g.length, h = c), b && c && (h = b >= c ? b : c), d < 0 && (i = Math.abs(d), d = +(d + i).toFixed(h), e = +(e + i).toFixed(h));
                var j, k = (e - d) / 100 * a + d,
                    l = this.options.step.toString().split(".")[1];
                return l ? k = +k.toFixed(l.length) : (k /= this.options.step, k *= this.options.step, k = +k.toFixed(0)), i && (k -= i), j = l ? +k.toFixed(l.length) : this.toFixed(k), j < this.options.min ? j = this.options.min : j > this.options.max && (j = this.options.max), j
            },
            calcWithStep: function (a) {
                var b = Math.round(a / this.coords.p_step) * this.coords.p_step;
                return b > 100 && (b = 100), 100 === a && (b = 100), this.toFixed(b)
            },
            checkMinInterval: function (a, b, c) {
                var d, e, f = this.options;
                return f.min_interval ? (d = this.convertToValue(a), e = this.convertToValue(b), "from" === c ? e - d < f.min_interval && (d = e - f.min_interval) : d - e < f.min_interval && (d = e + f.min_interval), this.convertToPercent(d)) : a
            },
            checkMaxInterval: function (a, b, c) {
                var d, e, f = this.options;
                return f.max_interval ? (d = this.convertToValue(a), e = this.convertToValue(b), "from" === c ? e - d > f.max_interval && (d = e - f.max_interval) : d - e > f.max_interval && (d = e + f.max_interval), this.convertToPercent(d)) : a
            },
            checkDiapason: function (a, b, c) {
                var d = this.convertToValue(a),
                    e = this.options;
                return "number" != typeof b && (b = e.min), "number" != typeof c && (c = e.max), d < b && (d = b), d > c && (d = c), this.convertToPercent(d)
            },
            toFixed: function (a) {
                return +(a = a.toFixed(20))
            },
            _prettify: function (a) {
                return this.options.prettify_enabled ? this.options.prettify && "function" == typeof this.options.prettify ? this.options.prettify(a) : this.prettify(a) : a
            },
            prettify: function (a) {
                return a.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator)
            },
            checkEdges: function (a, b) {
                return this.options.force_edges ? (a < 0 ? a = 0 : a > 100 - b && (a = 100 - b), this.toFixed(a)) : this.toFixed(a)
            },
            validate: function () {
                var a, b, c = this.options,
                    d = this.result,
                    e = c.values,
                    f = e.length;
                if ("string" == typeof c.min && (c.min = +c.min), "string" == typeof c.max && (c.max = +c.max), "string" == typeof c.from && (c.from = +c.from), "string" == typeof c.to && (c.to = +c.to), "string" == typeof c.step && (c.step = +c.step), "string" == typeof c.from_min && (c.from_min = +c.from_min), "string" == typeof c.from_max && (c.from_max = +c.from_max), "string" == typeof c.to_min && (c.to_min = +c.to_min), "string" == typeof c.to_max && (c.to_max = +c.to_max), "string" == typeof c.grid_num && (c.grid_num = +c.grid_num), c.max < c.min && (c.max = c.min), f)
                    for (c.p_values = [], c.min = 0, c.max = f - 1, c.step = 1, c.grid_num = c.max, c.grid_snap = !0, b = 0; b < f; b++) a = +e[b], isNaN(a) ? a = e[b] : (e[b] = a, a = this._prettify(a)), c.p_values.push(a);
                ("number" != typeof c.from || isNaN(c.from)) && (c.from = c.min), ("number" != typeof c.to || isNaN(c.to)) && (c.to = c.max), "single" === c.type ? (c.from < c.min && (c.from = c.min), c.from > c.max && (c.from = c.max)) : (c.from < c.min && (c.from = c.min), c.from > c.max && (c.from = c.max), c.to < c.min && (c.to = c.min), c.to > c.max && (c.to = c.max), this.update_check.from && (this.update_check.from !== c.from && c.from > c.to && (c.from = c.to), this.update_check.to !== c.to && c.to < c.from && (c.to = c.from)), c.from > c.to && (c.from = c.to), c.to < c.from && (c.to = c.from)), ("number" != typeof c.step || isNaN(c.step) || !c.step || c.step < 0) && (c.step = 1), "number" == typeof c.from_min && c.from < c.from_min && (c.from = c.from_min), "number" == typeof c.from_max && c.from > c.from_max && (c.from = c.from_max), "number" == typeof c.to_min && c.to < c.to_min && (c.to = c.to_min), "number" == typeof c.to_max && c.from > c.to_max && (c.to = c.to_max), d && (d.min !== c.min && (d.min = c.min), d.max !== c.max && (d.max = c.max), (d.from < d.min || d.from > d.max) && (d.from = c.from), (d.to < d.min || d.to > d.max) && (d.to = c.to)), ("number" != typeof c.min_interval || isNaN(c.min_interval) || !c.min_interval || c.min_interval < 0) && (c.min_interval = 0), ("number" != typeof c.max_interval || isNaN(c.max_interval) || !c.max_interval || c.max_interval < 0) && (c.max_interval = 0), c.min_interval && c.min_interval > c.max - c.min && (c.min_interval = c.max - c.min), c.max_interval && c.max_interval > c.max - c.min && (c.max_interval = c.max - c.min)
            },
            decorate: function (a, b) {
                var c = "",
                    d = this.options;
                return d.prefix && (c += d.prefix), c += a, d.max_postfix && (d.values.length && a === d.p_values[d.max] ? (c += d.max_postfix, d.postfix && (c += " ")) : b === d.max && (c += d.max_postfix, d.postfix && (c += " "))), d.postfix && (c += d.postfix), c
            },
            updateFrom: function () {
                this.result.from = this.options.from, this.result.from_percent = this.convertToPercent(this.result.from), this.result.from_pretty = this._prettify(this.result.from), this.options.values && (this.result.from_value = this.options.values[this.result.from])
            },
            updateTo: function () {
                this.result.to = this.options.to, this.result.to_percent = this.convertToPercent(this.result.to), this.result.to_pretty = this._prettify(this.result.to), this.options.values && (this.result.to_value = this.options.values[this.result.to])
            },
            updateResult: function () {
                this.result.min = this.options.min, this.result.max = this.options.max, this.updateFrom(), this.updateTo()
            },
            appendGrid: function () {
                if (this.options.grid) {
                    var a, b, c, d, e, f = this.options,
                        g = f.max - f.min,
                        h = f.grid_num,
                        i = 0,
                        j = 0,
                        k = 4,
                        l = 0,
                        m = "";
                    for (this.calcGridMargin(), f.grid_snap ? g > 50 ? (h = 50 / f.step, i = this.toFixed(f.step / .5)) : (h = g / f.step, i = this.toFixed(f.step / (g / 100))) : i = this.toFixed(100 / h), h > 4 && (k = 3), h > 7 && (k = 2), h > 14 && (k = 1), h > 28 && (k = 0), a = 0; a < h + 1; a++) {
                        for (c = k, j = this.toFixed(i * a), j > 100 && (j = 100), this.coords.big[a] = j, d = (j - i * (a - 1)) / (c + 1), b = 1; b <= c && 0 !== j; b++) l = this.toFixed(j - d * b), m += '<span class="irs-grid-pol small" style="left: ' + l + '%"></span>';
                        m += '<span class="irs-grid-pol" style="left: ' + j + '%"></span>', e = this.convertToValue(j), e = f.values.length ? f.p_values[e] : this._prettify(e), m += '<span class="irs-grid-text js-grid-text-' + a + '" style="left: ' + j + '%">' + e + "</span>"
                    }
                    this.coords.big_num = Math.ceil(h + 1), this.$cache.cont.addClass("irs-with-grid"), this.$cache.grid.html(m), this.cacheGridLabels()
                }
            },
            cacheGridLabels: function () {
                var a, b, c = this.coords.big_num;
                for (b = 0; b < c; b++) a = this.$cache.grid.find(".js-grid-text-" + b), this.$cache.grid_labels.push(a);
                this.calcGridLabels()
            },
            calcGridLabels: function () {
                var a, b, c = [],
                    d = [],
                    e = this.coords.big_num;
                for (a = 0; a < e; a++) this.coords.big_w[a] = this.$cache.grid_labels[a].outerWidth(!1), this.coords.big_p[a] = this.toFixed(this.coords.big_w[a] / this.coords.w_rs * 100), this.coords.big_x[a] = this.toFixed(this.coords.big_p[a] / 2), c[a] = this.toFixed(this.coords.big[a] - this.coords.big_x[a]), d[a] = this.toFixed(c[a] + this.coords.big_p[a]);
                for (this.options.force_edges && (c[0] < -this.coords.grid_gap && (c[0] = -this.coords.grid_gap, d[0] = this.toFixed(c[0] + this.coords.big_p[0]), this.coords.big_x[0] = this.coords.grid_gap), d[e - 1] > 100 + this.coords.grid_gap && (d[e - 1] = 100 + this.coords.grid_gap, c[e - 1] = this.toFixed(d[e - 1] - this.coords.big_p[e - 1]), this.coords.big_x[e - 1] = this.toFixed(this.coords.big_p[e - 1] - this.coords.grid_gap))), this.calcGridCollision(2, c, d), this.calcGridCollision(4, c, d), a = 0; a < e; a++) b = this.$cache.grid_labels[a][0], this.coords.big_x[a] !== Number.POSITIVE_INFINITY && (b.style.marginLeft = -this.coords.big_x[a] + "%")
            },
            calcGridCollision: function (a, b, c) {
                var d, e, f, g = this.coords.big_num;
                for (d = 0; d < g && !((e = d + a / 2) >= g); d += a) f = this.$cache.grid_labels[e][0], c[d] <= b[e] ? f.style.visibility = "visible" : f.style.visibility = "hidden"
            },
            calcGridMargin: function () {
                this.options.grid_margin && (this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && ("single" === this.options.type ? this.coords.w_handle = this.$cache.s_single.outerWidth(!1) : this.coords.w_handle = this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100), this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - .1), this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%", this.$cache.grid[0].style.left = this.coords.grid_gap + "%"))
            },
            update: function (b) {
                this.input && (this.is_update = !0, this.options.from = this.result.from, this.options.to = this.result.to, this.update_check.from = this.result.from, this.update_check.to = this.result.to, this.options = a.extend(this.options, b), this.validate(), this.updateResult(b), this.toggleInput(), this.remove(), this.init(!0))
            },
            reset: function () {
                this.input && (this.updateResult(), this.update())
            },
            destroy: function () {
                this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), a.data(this.input, "ionRangeSlider", null), this.remove(), this.input = null, this.options = null)
            }
        }, a.fn.ionRangeSlider = function (b) {
            return this.each(function () {
                a.data(this, "ionRangeSlider") || a.data(this, "ionRangeSlider", new h(this, b, f++))
            })
        },
            function () {
                for (var a = 0, b = ["ms", "moz", "webkit", "o"], d = 0; d < b.length && !c.requestAnimationFrame; ++d) c.requestAnimationFrame = c[b[d] + "RequestAnimationFrame"], c.cancelAnimationFrame = c[b[d] + "CancelAnimationFrame"] || c[b[d] + "CancelRequestAnimationFrame"];
                c.requestAnimationFrame || (c.requestAnimationFrame = function (b, d) {
                    var e = (new Date).getTime(),
                        f = Math.max(0, 16 - (e - a)),
                        g = c.setTimeout(function () {
                            b(e + f)
                        }, f);
                    return a = e + f, g
                }), c.cancelAnimationFrame || (c.cancelAnimationFrame = function (a) {
                    clearTimeout(a)
                })
            }()
    }), $(function () {
        var a = $("#price-calculation-range");
        a.ionRangeSlider({
            type: "single",
            min: 1,
            max: 100,
            grid: !0,
            hide_min_max: !0,
            disable: false,
            max_postfix: "+",
            grid_num: 10,
            onStart: function () {
                //document.getElementById('price-calculation-input').readOnly = false;
            }
        })

    });;

    function calculatePrice() {
        var user = $('#price-calculation-range').val();
        var fee = 70;
        var mfee = 70;
        var discount = 0;
        var finalprice = 0;
        var overallprice = 0;

        if (user == 1) {
            fee = 70;
            discount = 0;
            mfee = fee * user;
            $(".results-slider").show();
            $(".above-100").hide();
        }
        else if (user <= 4) {
            fee = 59.50;
            discount = 15;
            mfee = fee * user;
            $(".results-slider").show();
            $(".above-100").hide();
        }
        else if (user <= 9) {
            fee = 56.25;
            discount = 20;
            mfee = fee * user;
            $(".results-slider").show();
            $(".above-100").hide();
        }
        else if (user <= 19) {
            fee = 52.50;
            discount = 25;
            mfee = fee * user;
            $(".results-slider").show();
            $(".above-100").hide();
        }
        else if (user <= 49) {
            fee = 49;
            discount = 30;
            mfee = fee * user;
            $(".results-slider").show();
            $(".above-100").hide();
        }
        else if (user <= 99) {
            fee = 45.50;
            discount = 35;
            mfee = fee * user;
            $(".results-slider").show();
            $(".above-100").hide();
        }

        else if (user > 100) {
            $(".results-slider").hide();
            $(".above-100").show();
        }
        else if (user == 100) {
            $(".results-slider").hide();
            $(".above-100").show();
        }
        else {
            $(".results-slider").show();
            $(".above-100").hide();

        }
        //console.log(user);


        $('#price-calculation-output2').text('€' + fee);
        $('#price-calculation-monthly-output2').text('€' + mfee);
        $('#price-discount').text(discount + '%');
        //console.log(fee);
        //console.log(mfee);

        function updateSum() {
            var total = 0;
            $(".sum:checked").each(function (i, n) { total += parseInt($(n).val()); })
            $("#addon-discount").text('€' + total);
            finalprice = mfee + total;
            //console.log(finalprice);
            $("#overall-pricing").text('€' + finalprice);
            overallprice = finalprice - total;
            $("#final-price-tp").text('€' + overallprice);

        }
        // run the update on every checkbox change and on startup
        var priceit = $("input.sum").change(updateSum);
        updateSum();


    }



    $('#price-calculation-range').on("change keyup paste", calculatePrice);
    calculatePrice();


});

