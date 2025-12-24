// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="intro.html">Introduction</a></li><li class="chapter-item expanded "><a href="install/index.html"><strong aria-hidden="true">1.</strong> Installation</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="install/opam.html"><strong aria-hidden="true">1.1.</strong> opam package manager</a></li><li class="chapter-item expanded "><a href="install/coq.html"><strong aria-hidden="true">1.2.</strong> Install Coq and 3rd parties&#39; dependencies</a></li><li class="chapter-item expanded "><a href="install/pruvendo.html"><strong aria-hidden="true">1.3.</strong> Install Pruvendo libraries</a></li></ol></li><li class="chapter-item expanded "><a href="quick/index.html"><strong aria-hidden="true">2.</strong> Quick start</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="quick/simple.html"><strong aria-hidden="true">2.1.</strong> Write simple contract</a></li><li class="chapter-item expanded "><a href="quick/compile_ursus.html"><strong aria-hidden="true">2.2.</strong> Compile and extract solidity sources</a></li><li class="chapter-item expanded "><a href="quick/compile_sol.html"><strong aria-hidden="true">2.3.</strong> Compile extracted contract and deploy</a></li></ol></li><li class="chapter-item expanded "><a href="eDSL/index.html"><strong aria-hidden="true">3.</strong> Coq embedded DSL</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="eDSL/custom_grammar.html"><strong aria-hidden="true">3.1.</strong> Coq custom grammar</a></li><li class="chapter-item expanded "><a href="eDSL/ursus_embedding.html"><strong aria-hidden="true">3.2.</strong> Ursus embedding</a></li><li class="chapter-item expanded "><a href="eDSL/grammar_core.html"><strong aria-hidden="true">3.3.</strong> URValue grammar</a></li><li class="chapter-item expanded "><a href="eDSL/grammar_lvalue.html"><strong aria-hidden="true">3.4.</strong> ULValue grammar</a></li><li class="chapter-item expanded "><a href="eDSL/grammar_expr.html"><strong aria-hidden="true">3.5.</strong> UExpression grammar</a></li><li class="chapter-item expanded "><a href="eDSL/notations.html"><strong aria-hidden="true">3.6.</strong> Notational mechanism</a></li></ol></li><li class="chapter-item expanded "><a href="ulang/index.html"><strong aria-hidden="true">4.</strong> Ursus as a language</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ulang/contract_file_structure.html"><strong aria-hidden="true">4.1.</strong> Contract file structure</a></li><li class="chapter-item expanded "><a href="ulang/file_header.html"><strong aria-hidden="true">4.2.</strong> Contract file headers</a></li><li class="chapter-item expanded "><a href="ulang/contract_file_interfaces.html"><strong aria-hidden="true">4.3.</strong> Contract file interfaces</a></li><li class="chapter-item expanded "><a href="ulang/contract_record.html"><strong aria-hidden="true">4.4.</strong> Contract record</a></li><li class="chapter-item expanded "><a href="ulang/primitives.html"><strong aria-hidden="true">4.5.</strong> Types, primitives, and literals</a></li><li class="chapter-item expanded "><a href="ulang/constants.html"><strong aria-hidden="true">4.6.</strong> Global constants</a></li><li class="chapter-item expanded "><a href="ulang/structures.html"><strong aria-hidden="true">4.7.</strong> Complex Structures</a></li><li class="chapter-item expanded "><a href="ulang/functions.html"><strong aria-hidden="true">4.8.</strong> Functions and modifiers</a></li><li class="chapter-item expanded "><a href="ulang/function_operators.html"><strong aria-hidden="true">4.9.</strong> Function operators</a></li><li class="chapter-item expanded "><a href="ulang/messages.html"><strong aria-hidden="true">4.10.</strong> Interfaces and messages</a></li><li class="chapter-item expanded "><a href="ulang/attributes.html"><strong aria-hidden="true">4.11.</strong> Function attributes</a></li><li class="chapter-item expanded "><a href="ulang/local.html"><strong aria-hidden="true">4.12.</strong> Local state and variables</a></li><li class="chapter-item expanded "><a href="ulang/multi.html"><strong aria-hidden="true">4.13.</strong> Multi-contract system</a></li><li class="chapter-item expanded "><a href="ulang/inheritance.html"><strong aria-hidden="true">4.14.</strong> Contract inheritance</a></li></ol></li><li class="chapter-item expanded "><a href="programming/index.html"><strong aria-hidden="true">5.</strong> Ursus programming style</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="programming/repl.html"><strong aria-hidden="true">5.1.</strong> REPL</a></li><li class="chapter-item expanded "><a href="programming/context.html"><strong aria-hidden="true">5.2.</strong> Goal and context</a></li><li class="chapter-item expanded "><a href="programming/tactics.html"><strong aria-hidden="true">5.3.</strong> Tactics and tacticals</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="programming/control.html"><strong aria-hidden="true">5.3.1.</strong> Ursus control sub-languange</a></li></ol></li><li class="chapter-item expanded "><a href="programming/holes.html"><strong aria-hidden="true">5.4.</strong> Holes</a></li><li class="chapter-item expanded "><a href="programming/prepost.html"><strong aria-hidden="true">5.5.</strong> Default prefix and postfix operations</a></li></ol></li><li class="chapter-item expanded "><a href="stdlib/index.html"><strong aria-hidden="true">6.</strong> Ursus standard library</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="stdlib/primitives.html"><strong aria-hidden="true">6.1.</strong> Primitives operations</a></li><li class="chapter-item expanded "><a href="stdlib/functions.html"><strong aria-hidden="true">6.2.</strong> Standart functions</a></li><li class="chapter-item expanded "><a href="stdlib/operators.html"><strong aria-hidden="true">6.3.</strong> Basic operators</a></li><li class="chapter-item expanded "><a href="stdlib/TVM.html"><strong aria-hidden="true">6.4.</strong> TVM functions</a></li></ol></li><li class="chapter-item expanded "><a href="verification/index.html"><strong aria-hidden="true">7.</strong> Ursus verification</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="verification/principles.html"><strong aria-hidden="true">7.1.</strong> Common principles</a></li><li class="chapter-item expanded "><a href="verification/stdlib.html"><strong aria-hidden="true">7.2.</strong> StdLib verification</a></li><li class="chapter-item expanded "><a href="verification/qc.html"><strong aria-hidden="true">7.3.</strong> QuickChick</a></li></ol></li><li class="chapter-item expanded "><a href="long/index.html"><strong aria-hidden="true">8.</strong> Long start</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="long/design.html"><strong aria-hidden="true">8.1.</strong> Designing contract</a></li><li class="chapter-item expanded "><a href="long/impl.html"><strong aria-hidden="true">8.2.</strong> Implementation</a></li><li class="chapter-item expanded "><a href="long/deploy.html"><strong aria-hidden="true">8.3.</strong> Extracting, compiling and deploy</a></li><li class="chapter-item expanded "><a href="long/spec.html"><strong aria-hidden="true">8.4.</strong> Specification</a></li><li class="chapter-item expanded "><a href="long/ts4.html"><strong aria-hidden="true">8.5.</strong> TS4 integration</a></li><li class="chapter-item expanded "><a href="long/qc.html"><strong aria-hidden="true">8.6.</strong> Quickchicks</a></li><li class="chapter-item expanded "><a href="long/execs.html"><strong aria-hidden="true">8.7.</strong> Evals and execs</a></li><li class="chapter-item expanded "><a href="long/direct_proofs.html"><strong aria-hidden="true">8.8.</strong> Direct proofs</a></li><li class="chapter-item expanded "><a href="long/scenarios.html"><strong aria-hidden="true">8.9.</strong> Scenarios</a></li><li class="chapter-item expanded "><a href="long/multi.html"><strong aria-hidden="true">8.10.</strong> Multi-contract verification</a></li></ol></li><li class="chapter-item expanded "><a href="translation/index.html"><strong aria-hidden="true">9.</strong> Translation</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="translation/sol-ursus.html"><strong aria-hidden="true">9.1.</strong> sol-&gt;ursus translation</a></li><li class="chapter-item expanded "><a href="translation/cpp-ursus.html"><strong aria-hidden="true">9.2.</strong> cpp-&gt;ursus translation</a></li><li class="chapter-item expanded "><a href="translation/ursus-sol.html"><strong aria-hidden="true">9.3.</strong> ursus-&gt;sol translation</a></li></ol></li><li class="chapter-item expanded "><a href="advanced/index.html"><strong aria-hidden="true">10.</strong> Advanced topics</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="advanced/ledger.html"><strong aria-hidden="true">10.1.</strong> Ledger and Superledger</a></li><li class="chapter-item expanded "><a href="advanced/spec.html"><strong aria-hidden="true">10.2.</strong> Specification</a></li><li class="chapter-item expanded "><a href="advanced/proof_kinds.html"><strong aria-hidden="true">10.3.</strong> Proof kinds</a></li><li class="chapter-item expanded "><a href="advanced/generator.html"><strong aria-hidden="true">10.4.</strong> Evals and execs generator</a></li><li class="chapter-item expanded "><a href="advanced/elpi.html"><strong aria-hidden="true">10.5.</strong> Elpi automation</a></li></ol></li><li class="chapter-item expanded "><a href="uncategorized.html"><strong aria-hidden="true">11.</strong> More and uncategorized</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
