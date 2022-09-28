const SSPMToggler = document.querySelector(".SSPM-toggler");
const SSPM = document.querySelector(".shop-side-pane-mobile");

if (window.innerWidth >= 1095) {
	SSPM.classList.remove("SSPM-closed");
}
window.addEventListener("resize", function() {
	if (this.innerWidth >= 1095) {
		SSPM.classList.remove("SSPM-closed");
	}
})
SSPMToggler.addEventListener("click", () => {
if (this.innerWidth < 1095) {
		console.log("clicking")
		SSPM.classList.toggle("SSPM-closed");
	} else {
		console.log("we just got to larger screen");
		
	}
})