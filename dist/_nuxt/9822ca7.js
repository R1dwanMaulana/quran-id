(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3],{230:function(t,n,e){"use strict";e.r(n);var r=e(42),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",{staticClass:"fixed bottom-0 inset-x-0 bg-green-500 text-white text-xs uppercase font-serif flex jestify-between"},[e("nuxt-link",{staticClass:"w-full block py-2 px-3 text-center hover:bg-green-600 transition duration-300",attrs:{to:"/"}},[e("svg",{staticClass:"w-6 h-5 mb-2 mx-auto",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}})]),t._v("\n            Home\n        ")]),t._v(" "),e("nuxt-link",{staticClass:"w-full block py-2 px-3 text-center hover:bg-green-600 transition duration-300",attrs:{to:"/ayat"}},[e("svg",{staticClass:"w-6 h-5 mb-2 mx-auto",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}})]),t._v("\n            Ayat\n        ")]),t._v(" "),e("a",{staticClass:"w-full block py-2 px-3 text-center hover:bg-green-600 transition duration-300",attrs:{href:"https://riddev.tech",target:"_blank"}},[e("svg",{staticClass:"w-6 h-5 mb-2 mx-auto",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"}})]),t._v("\n            About\n        ")])],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Nav:e(230).default})},232:function(t,n,e){var content=e(237);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(60).default)("bad8e090",content,!0,{sourceMap:!1})},236:function(t,n,e){"use strict";e(232)},237:function(t,n,e){var r=e(59)((function(i){return i[1]}));r.push([t.i,'.container{\n  margin:0 auto;\n  padding-bottom:100px;\n  min-height:100vh;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  text-align:center\n}\n.title{\n  font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n  display:block;\n  font-weight:300;\n  font-size:30px;\n  color:#35495e;\n  letter-spacing:1px\n}\n.subtitle{\n  font-weight:300;\n  font-size:42px;\n  color:#526488;\n  word-spacing:5px;\n  padding-bottom:15px\n}\n.links{\n  padding-top:15px\n}\n.dropdown:hover .dropdown-menu{\n  display:flex\n}',""]),r.locals={},t.exports=r},241:function(t,n,e){"use strict";e.r(n);var r=e(6),o=(e(34),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$axios,n.next=3,e.$get("/surah");case 3:return r=n.sent,n.abrupt("return",{surah:r});case 5:case"end":return n.stop()}}),n)})))()}}),l=(e(236),e(42)),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("Nav"),t._v(" "),e("div",[e("h3",{staticClass:"bg-gray-800 py-9 px-4 rounded-md m-4 text-white font-semibold shadow-md"},[t._v("Aplikasi Qur'an terjemahan Bahasa Indonesia lengkap dengan Tafsir")]),t._v(" "),e("br"),t._v(" "),e("hr"),t._v(" "),e("p",{staticClass:"text-left m-4 font-medium"},[t._v("List Surah :")]),t._v(" "),t._l(t.surah.data,(function(n){return e("div",{key:n.id,staticClass:"h-auto text-left w-auto py-6 px-4 m-4 rounded-lg hover:shadow-lg text-black border"},[e("ul",[e("li",[e("p",[t._v("Nama Surah : "+t._s(n.name.transliteration.id))])]),t._v(" "),e("li",[e("p",[t._v("Diturunkan : "+t._s(n.revelation.id))])]),t._v(" "),e("div",{staticClass:"dropdown"},[e("button",{staticClass:"bg-gray-300 shadow-md hover:shadow-none rounded-md text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"},[e("span",{staticClass:"mr-1"},[t._v("Tafsir")]),t._v(" "),e("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])]),t._v(" "),e("ul",{staticClass:"pb-3 dropdown-menu hidden text-gray-700 pt-1"},[e("li",{},[e("a",{staticClass:"rounded-md bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"},[t._v(t._s(n.tafsir.id))])])]),t._v(" "),e("button",{staticClass:"bg-blue-600 text-white shadow-md hover:shadow-none rounded-md font-normal py-2 px-4 rounded-md",on:{click:function(e){return t.$router.push({name:"surah-id",params:{id:n.number}})}}},[t._v("\n              Baca surah\n            ")])])])])}))],2)],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Nav:e(230).default})}}]);