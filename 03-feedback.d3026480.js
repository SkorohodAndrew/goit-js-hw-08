!function(){var e,t="feedback-form-state",n={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea")};function r(e){var n=e.target.value;localStorage.setItem(t,n)}n.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),console.log("відправити форму")})),n.input.addEventListener("input",r),n.input.addEventListener("input",r),e=localStorage.getItem(t),console.log(e)}();
//# sourceMappingURL=03-feedback.d3026480.js.map
