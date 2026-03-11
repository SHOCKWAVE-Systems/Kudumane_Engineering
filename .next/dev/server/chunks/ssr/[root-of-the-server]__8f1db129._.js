module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/components/Button.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
const baseClasses = "inline-flex items-center justify-center rounded-sm border px-5 py-3 text-sm font-semibold uppercase tracking-wide transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2";
const variants = {
    primary: "border-accent-500 bg-accent-500 text-white hover:border-accent-600 hover:bg-accent-600",
    outline: "border-white bg-transparent text-white hover:bg-white hover:text-black",
    light: "border-white bg-white text-black hover:bg-slate-100"
};
function Button({ href, children, className = "", type = "button", variant = "primary" }) {
    const classes = `${baseClasses} ${variants[variant]} ${className}`.trim();
    if (href) {
        if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http")) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: href,
                className: classes,
                children: children
            }, void 0, false, {
                fileName: "[project]/components/Button.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            className: classes,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/Button.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        className: classes,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Button.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Section.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Section",
    ()=>Section
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Container.tsx [app-rsc] (ecmascript)");
;
;
function Section({ id, title, subtitle, children, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        className: `py-12 sm:py-16 ${className}`.trim(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
            children: [
                title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-bold text-white sm:text-4xl",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/components/Section.tsx",
                    lineNumber: 16,
                    columnNumber: 18
                }, this) : null,
                subtitle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 max-w-3xl text-base text-slate-300",
                    children: subtitle
                }, void 0, false, {
                    fileName: "[project]/components/Section.tsx",
                    lineNumber: 17,
                    columnNumber: 21
                }, this) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/Section.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Section.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Section.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/CoreBusinessPage.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CoreBusinessPage",
    ()=>CoreBusinessPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Container.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Section.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
function CoreBusinessPage({ service }) {
    const contactHref = service.contactHref || "/contact";
    const shouldUseBackdrop = service.slug === "/core-business-3" && service.backdropImageSrc;
    const contentSections = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Section"], {
                title: "What We Do",
                subtitle: "Practical, field-ready service scope tailored for industrial and mining-adjacent use.",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-3 rounded-xl border border-slate-700 bg-brand-600 p-6 text-sm text-slate-100",
                    children: service.whatWeDo.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: item
                        }, item, false, {
                            fileName: "[project]/components/CoreBusinessPage.tsx",
                            lineNumber: 19,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/CoreBusinessPage.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/CoreBusinessPage.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Section"], {
                title: service.reasonsTitle,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-3 rounded-xl border border-slate-700 bg-brand-600 p-6 text-sm text-slate-100",
                    children: service.reasons.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: item
                        }, item, false, {
                            fileName: "[project]/components/CoreBusinessPage.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/CoreBusinessPage.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/CoreBusinessPage.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Section"], {
                title: "Typical Deliverables",
                subtitle: "What clients can expect from each service engagement.",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-3 rounded-xl border border-slate-700 bg-brand-600 p-6 text-sm text-slate-100",
                        children: service.deliverables.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: item
                            }, item, false, {
                                fileName: "[project]/components/CoreBusinessPage.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/CoreBusinessPage.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    service.extraSection ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 rounded-xl border border-slate-700 bg-brand-700 p-6 text-slate-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold",
                                children: service.extraSection.title
                            }, void 0, false, {
                                fileName: "[project]/components/CoreBusinessPage.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-4 space-y-2 text-sm text-slate-200",
                                children: service.extraSection.content.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: item
                                    }, item, false, {
                                        fileName: "[project]/components/CoreBusinessPage.tsx",
                                        lineNumber: 43,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/CoreBusinessPage.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            service.extraSection.link ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                    href: service.extraSection.link.href,
                                    variant: "outline",
                                    className: "border-slate-200",
                                    children: service.extraSection.link.label
                                }, void 0, false, {
                                    fileName: "[project]/components/CoreBusinessPage.tsx",
                                    lineNumber: 48,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CoreBusinessPage.tsx",
                                lineNumber: 47,
                                columnNumber: 15
                            }, this) : null,
                            service.extraSection.galleryImages?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
                                children: service.extraSection.galleryImages.map((image)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-hidden rounded-lg border border-slate-600 bg-black/30 p-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            src: image.src,
                                            alt: image.alt,
                                            width: 700,
                                            height: 500,
                                            className: "h-36 w-full object-contain sm:h-40",
                                            unoptimized: true
                                        }, void 0, false, {
                                            fileName: "[project]/components/CoreBusinessPage.tsx",
                                            lineNumber: 60,
                                            columnNumber: 21
                                        }, this)
                                    }, image.src, false, {
                                        fileName: "[project]/components/CoreBusinessPage.tsx",
                                        lineNumber: 56,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/CoreBusinessPage.tsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CoreBusinessPage.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                            href: contactHref,
                            children: service.ctaLabel || "Contact Us About This Service"
                        }, void 0, false, {
                            fileName: "[project]/components/CoreBusinessPage.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/CoreBusinessPage.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CoreBusinessPage.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border-b border-slate-800 bg-gradient-to-b from-black to-brand-700 py-14 sm:py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
                    className: "grid gap-8 lg:grid-cols-2 lg:items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-bold text-white sm:text-5xl",
                                    children: service.title
                                }, void 0, false, {
                                    fileName: "[project]/components/CoreBusinessPage.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-base text-slate-200",
                                    children: service.intro
                                }, void 0, false, {
                                    fileName: "[project]/components/CoreBusinessPage.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                        href: contactHref,
                                        children: service.ctaLabel || "Request Service Support"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CoreBusinessPage.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/CoreBusinessPage.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CoreBusinessPage.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        service.slug === "/core-business-2" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-[280px] items-center justify-center overflow-hidden rounded-xl border border-slate-700 bg-black/30 p-3 shadow-sm sm:h-[340px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                src: service.imageSrc,
                                alt: `${service.title} placeholder image`,
                                width: 900,
                                height: 600,
                                className: "h-full w-full object-contain",
                                unoptimized: true
                            }, void 0, false, {
                                fileName: "[project]/components/CoreBusinessPage.tsx",
                                lineNumber: 94,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/CoreBusinessPage.tsx",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            src: service.imageSrc,
                            alt: `${service.title} placeholder image`,
                            width: 900,
                            height: 600,
                            className: "h-auto w-full rounded-xl border border-slate-700 bg-black/30 shadow-sm",
                            unoptimized: true
                        }, void 0, false, {
                            fileName: "[project]/components/CoreBusinessPage.tsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CoreBusinessPage.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/CoreBusinessPage.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            shouldUseBackdrop ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-20",
                                style: {
                                    backgroundImage: `url(${service.backdropImageSrc})`
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/CoreBusinessPage.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black/70"
                            }, void 0, false, {
                                fileName: "[project]/components/CoreBusinessPage.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CoreBusinessPage.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: contentSections
                    }, void 0, false, {
                        fileName: "[project]/components/CoreBusinessPage.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CoreBusinessPage.tsx",
                lineNumber: 117,
                columnNumber: 9
            }, this) : contentSections
        ]
    }, void 0, true);
}
}),
"[project]/lib/seo.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildPageMetadata",
    ()=>buildPageMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site.ts [app-rsc] (ecmascript)");
;
function buildPageMetadata({ title, description, path }) {
    const canonical = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toAbsoluteUrl"])(path);
    const ogImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toAbsoluteUrl"])("/images/og-default.svg");
    return {
        title,
        description,
        alternates: {
            canonical
        },
        openGraph: {
            type: "website",
            siteName: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["businessName"],
            url: canonical,
            title,
            description,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["businessName"]} Open Graph Image`
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [
                ogImage
            ]
        }
    };
}
}),
"[project]/lib/services.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getServiceBySlug",
    ()=>getServiceBySlug,
    "getServiceBySlugOrThrow",
    ()=>getServiceBySlugOrThrow,
    "servicePages",
    ()=>servicePages
]);
function buildMailtoForService(serviceName) {
    const subject = encodeURIComponent(`Kudumane Website Enquiry - ${serviceName}`);
    const body = encodeURIComponent([
        `Hello Kudumane Team,`,
        ``,
        `I would like assistance with ${serviceName}.`,
        ``,
        `Please contact me to discuss pricing, availability, and next steps.`,
        ``,
        `Name:`,
        `Company:`,
        `Phone:`,
        ``,
        `Thank you.`
    ].join("\n"));
    return `mailto:reception@kbrakes.co.za?subject=${subject}&body=${body}`;
}
const servicePages = [
    {
        slug: "/core-business-1",
        navLabel: "Brake Testing",
        title: "Brake Testing",
        metaDescription: "Dynamic brake testing for mining TMMs, road vehicles, buses, and side tipper trucks on-site or at our workshop.",
        intro: "We provide dynamic brake testing for mining TMMs, road vehicles, buses, side tipper trucks, and other heavy-duty fleets on-site or from our workshop.",
        whatWeDo: [
            "Dynamic brake testing of mining TMMs, road vehicles, buses, and side tipper trucks.",
            "On-site testing support or workshop-based testing programs.",
            "Vehicle inspections to check component wear, leaks, and overall system integrity.",
            "Reporting and documented brake test results with visual inspection findings."
        ],
        deliverables: [
            "Brake test result reports with key deceleration and stopping metrics.",
            "Visual inspection checklists highlighting wear, leaks, and defects.",
            "Practical recommendations for maintenance and corrective action.",
            "Records suitable for internal safety and compliance tracking."
        ],
        reasonsTitle: "Why Our Approach Is More Effective",
        reasons: [
            "We identify future failures, not just current ones.",
            "Our qualified artisans bring many years of field experience.",
            "We detect imbalances and mechanical issues often missed by standard testing.",
            "We provide actionable insights, not just test results.",
            "Our inspections reduce downtime, repair costs, and safety incidents.",
            "Mines gain confidence that vehicles entering production are safe, stable, and compliant.",
            "Price competitive service for recurring testing programs."
        ],
        imageSrc: "/images/Dumptruck.png",
        ctaLabel: "Book a Brake Test"
    },
    {
        slug: "/core-business-2",
        navLabel: "Autostop Brake Meter",
        title: "AutoStop Heavy Brake Meter",
        metaDescription: "Supply, certified training, and yearly calibration support for the AutoStop Heavy Brake Meter.",
        intro: "We supply the AutoStop Heavy Brake Meter, provide certified training for operators, and perform yearly calibrations for continued reliability.",
        whatWeDo: [
            "Supply of the AutoStop Heavy Brake Meter for heavy-duty brake testing.",
            "Certified user training for safe and accurate operation.",
            "Yearly calibration services to maintain measurement confidence."
        ],
        deliverables: [
            "Commissioning support and setup guidance.",
            "Training completion support for operational teams.",
            "Scheduled yearly calibration services.",
            "After-sale support on accessories, consumables, and spares."
        ],
        reasonsTitle: "Why Choose The AutoStop Heavy Brake Meter?",
        reasons: [
            "Rugged, reliable, and user-friendly design.",
            "Used in open cast and underground mines across South Africa.",
            "Supports compliance with SANS 1589 accuracy expectations.",
            "Low-cost spare parts, accessories, and consumables.",
            "Comprehensive after-sale technical support."
        ],
        imageSrc: "/images/autostop-brake-meter.png",
        contactHref: buildMailtoForService("AutoStop Heavy Brake Meter"),
        extraSection: {
            title: "Features",
            content: [
                "Built-in printer outputs key results such as average deceleration, max deceleration, stopping distance, test speed, and pedal force.",
                "Included software allows you to download, view, and save an unlimited number of brake tests.",
                "Brake tests can be printed as clean A4 reports, including test values and graph output.",
                "Scroll down on this page after content is finalized to include the A4 report sample image."
            ],
            link: {
                href: "https://youtu.be/LmxNLtHVx2A?si=ToSe1MY4OIwd1bqN",
                label: "Watch AutoStop Demo on YouTube"
            }
        }
    },
    {
        slug: "/core-business-3",
        navLabel: "Brakes, Clutches, Truck and Trailer Component Supply",
        title: "Brakes, Clutches, Truck & Trailer Components",
        metaDescription: "Supply of brake and clutch components plus truck and trailer parts with prompt delivery in the Kuruman region.",
        intro: "We provide prompt delivery of brake, clutch, truck, and trailer parts within Kuruman and surrounding areas including Kathu, Postmasburg, Danielskuil, Olifantshoek, Hotazel, and Blackrock. We are not limited to these towns and can support wider areas on request.",
        whatWeDo: [
            "Brake and clutch component sourcing and supply.",
            "Relining, riveting, and bonding support services.",
            "Prompt local delivery for workshop and fleet requirements.",
            "Technical guidance on selecting fit-for-purpose parts."
        ],
        deliverables: [
            "Brake linings and disc brake pads.",
            "Clutches, transmissions, brake drums, and brake discs.",
            "Brake shoes and linings for heavy vehicles, slack adjusters, and brake chambers.",
            "Wheel cylinders, air valves, compressors, ABS/EBS components, air tanks, hoses, and specialist consumables."
        ],
        reasonsTitle: "Supply Focus Areas",
        reasons: [
            "Reliable turnaround and delivery response in the regional service area.",
            "Range coverage for both light and heavy-duty applications.",
            "Support for recurring fleet maintenance demand.",
            "Trusted part-sourcing network for essential brake and trailer components."
        ],
        imageSrc: "/images/Side Tipper Truck.png",
        backdropImageSrc: "/images/Part backdrop.png",
        contactHref: buildMailtoForService("Brakes, Clutches, Truck & Trailer Components"),
        extraSection: {
            title: "Product Display Gallery",
            content: [
                "These images are for web display purposes to show examples of what we offer.",
                "Contact us for stock availability, alternatives, and bulk supply support."
            ],
            galleryImages: [
                {
                    src: "/images/Parts 1.png",
                    alt: "Brake component examples from the workshop - photo 1"
                },
                {
                    src: "/images/Parts 2.png",
                    alt: "Brake component examples from the workshop - photo 2"
                }
            ]
        }
    },
    {
        slug: "/core-business-4",
        navLabel: "Repairs and Maintenance",
        title: "Brake Repairs and Maintenance",
        metaDescription: "Fitment centre services, precision machining support, and full brake repair and maintenance procedures.",
        intro: "We operate as a fitment centre with professional brake and clutch installation, a fully equipped machine shop, and retail access to brake and clutch components.",
        whatWeDo: [
            "Professional fitment of brake and clutch components.",
            "Precision machining tasks required for brake repair and maintenance.",
            "Retail supply of brake and clutch related parts and components.",
            "End-to-end brake repair support for heavy-duty and fleet vehicles."
        ],
        deliverables: [
            "Vehicle inspections to determine brake component wear and failure risk.",
            "Brake disc and drum measurement against minimum safe specifications.",
            "Brake disc and drum skimming to restore operating surfaces.",
            "Relining of brake pads and shoes for reliable braking performance."
        ],
        reasonsTitle: "Maintenance Outcomes",
        reasons: [
            "Prompt issue resolution to keep vehicles safe and productive.",
            "Accurate diagnosis based on real component condition.",
            "Practical solutions that balance safety, compliance, and cost.",
            "Integrated machining and fitment capabilities in one service flow."
        ],
        imageSrc: "/images/brake-repairs-photo.jpg",
        contactHref: buildMailtoForService("Brake Repairs and Maintenance")
    }
];
function getServiceBySlug(slug) {
    return servicePages.find((service)=>service.slug === slug);
}
function getServiceBySlugOrThrow(slug) {
    const service = getServiceBySlug(slug);
    if (!service) {
        throw new Error(`Service configuration missing for ${slug}`);
    }
    return service;
}
}),
"[project]/app/core-business-1/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CoreBusinessOnePage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CoreBusinessPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CoreBusinessPage.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/seo.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services.ts [app-rsc] (ecmascript)");
;
;
;
;
const service = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServiceBySlugOrThrow"])("/core-business-1");
const metadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildPageMetadata"])({
    title: `${service.title} | KUDUMANE ENGINEERING BRAKES & SUPPLIES`,
    description: service.metaDescription,
    path: "/core-business-1"
});
function CoreBusinessOnePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CoreBusinessPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CoreBusinessPage"], {
        service: service
    }, void 0, false, {
        fileName: "[project]/app/core-business-1/page.tsx",
        lineNumber: 15,
        columnNumber: 10
    }, this);
}
}),
"[project]/app/core-business-1/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/core-business-1/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8f1db129._.js.map