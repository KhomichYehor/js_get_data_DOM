var t=document.querySelectorAll(".population"),e=0,o=t.length;t.forEach(function(t){var o=parseInt(t.textContent.replaceAll(",",""));e+=o});var n=e/o,r=new Intl.NumberFormat("en-US"),a=r.format(e),l=r.format(n);document.querySelector(".total-population").textContent=a,document.querySelector(".average-population").textContent=l;
//# sourceMappingURL=index.3da862db.js.map
