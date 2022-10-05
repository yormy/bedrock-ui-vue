function on(t, e, o, r) {
    const selectors = document.querySelectorAll(t);
    selectors.forEach(item => {
        item.addEventListener(e, (t) => {
            t.target.closest(o) && r(t);
        });
    });
}

let viewportWidth;
function setViewportWidth() {
    viewportWidth = window.innerWidth || document.documentElement.clientWidth;
}

// function watchWidth() {
//     const t = document.querySelector(".y-menu-left");
//     if (viewportWidth < 640) {
//       if (!t) return;
//       t.querySelector(".menu-detail.open") ||
//       (t.classList.add("menu-hidden"),
//         document.documentElement.classList.add("menu-hidden"),
//         t.querySelectorAll(".menu-detail.open").forEach((e) => {
//           hideOverlay(), t.classList.contains("menu-wide") || e.classList.remove("open");
//         }));
//     }
//     if (viewportWidth > 640) {
//       if (!t) return;
//       t.classList.remove("menu-hidden"), document.documentElement.classList.remove("menu-hidden");
//     }
//     viewportWidth > 1024 &&
//     (() => {
//       const t = document.querySelector(".sidebar");
//       t && t.classList.contains("open") && (t.classList.remove("open"), hideOverlay());
//     })();
// }



function openCollapse(target, e) {
    target.style.transitionProperty = "height, opacity";
    target.style.transitionDuration = "200ms";
    target.style.transitionTimingFunction = "ease-in-out";

    setTimeout(() => {
        target.style.height = target.scrollHeight + "px";
        target.style.opacity = 1;
      }, 200);

    target.addEventListener(
        "transitionend",
        () => {
            target.classList.add("open");
            target.style.removeProperty("height");
            target.style.removeProperty("opacity");
            target.style.removeProperty("transition-property");
            target.style.removeProperty("transition-duration");
            target.style.removeProperty("transition-timing-function");
          "function" == typeof e && e();
        },
        { once: !0 }
  );
}

function closeCollapse(target, callback) {
  target.style.overflowY = "hidden";
  target.style.height = target.scrollHeight + "px";
  target.style.transitionProperty = "height, opacity";
  target.style.transitionDuration = "200ms";
  target.style.transitionTimingFunction = "ease-in-out";

  setTimeout(() => {
    target.style.height = 0;
    target.style.opacity = 0;
  }, 200);

  target.addEventListener(
    "transitionend",
    () => {
        target.classList.remove("open");
        target.style.removeProperty("overflow-y");
        target.style.removeProperty("height");
        target.style.removeProperty("opacity");
        target.style.removeProperty("transition-property");
        target.style.removeProperty("transition-duration");
        target.style.removeProperty("transition-timing-function");
      "function" == typeof callback && callback();
    },
    { once: !0 }
  );
}

function collapse() {
  const target = '[data-toggle="collapse"]';
  on("body", "click", target, (e) => {
    ((e) => {
      e.classList.toggle("is-active");
        document.querySelectorAll(e.dataset.target).forEach((item) => {
            if (item.classList.contains("open")) {
                closeCollapse(item);
            } else {
                openCollapse(item);
            }

        });

        // accordeon : obsolete ?
      // const o = e.closest(".accordion");
      // o &&
      // (o.querySelectorAll(target).forEach((target) => {
      //     target !== e && target.classList.remove("is-active");
      // }),
      //   o.querySelectorAll(".collapse").forEach((target) => {
      //       target.classList.contains("open") && closeCollapse(target);
      //   }));

    })(e.target.closest(target));
  });
}

function customizer() {
    on("#customizer", "click", '[data-toggle="customizer"]', () => {
      (() => {
        const pullMenu = document.getElementById("customizer");
        if(pullMenu.classList.contains("open")) {
            pullMenu.classList.remove("open")
            hideOverlay();
        } else {
            pullMenu.classList.add("open");
            showOverlay();
        }
      })();
    });
}


function darkMode() {
    // const root = document.documentElement;
    const body = document.body;

    on("body", "change", "#darkModeToggler", () => {
        if (body.classList.contains("dark")) {
            body.classList.remove("dark");
        } else {
            body.classList.add("dark");

        }
    });


}


function menu() {
    const root = document.documentElement;
    // const menuType = localStorage.getItem("menuType");
    const menuleft = document.querySelector(".y-menu-left");
    const menuitems = document.querySelector(".menu-items");

    if (!menuleft) {
        return;
    }

  // menuType && (root.classList.add(menuType), menuleft.classList.add(menuType));


  function a() {
    menuleft.querySelectorAll(".menu-detail.open").forEach((element) => {
        hideOverlay();
        menuleft.classList.contains("menu-wide") || element.classList.remove("open"); // ???

        const workspace = document.querySelector(".y-menu-workspace");
        workspace.classList.remove("background");
    });
  }


  document.addEventListener("click", (event) => {
    event.target.closest(".menu-items a") || event.target.closest(".menu-detail") || menuleft.classList.contains("menu-wide") || a();
  });

    on(".menu-items", "click", ".link", (t) => {
      const e = t.target.closest(".link").dataset.target;
        const menuItemLeft = menuleft.querySelector(e);

      if (menuItemLeft && !menuleft.classList.contains("menu-wide")) {
        const open = menuItemLeft.classList.contains("open");
        a();
        if (menuItemLeft && !open ) {
            showOverlay();
            menuItemLeft.classList.add("open");


            const workspace = document.querySelector(".y-menu-workspace");
            workspace.classList.add("background");

        } else {
            hideOverlay()
        }
      }
    });

  on(".y-menu-top", "click", "[data-toggle='menu']", (e) => {
      if (menuleft.classList.contains("menu-hidden")) {
          root.classList.remove("menu-hidden"); // allow other elements to respond
          menuleft.classList.remove("menu-hidden");
      } else {
          root.classList.add("menu-hidden"); // allow other elements to respond
          menuleft.classList.add("menu-hidden");
      }
  });


  // function i(e) {
  //     const r = menuleft.querySelector(".menu-detail.open");
  //     switch (
  //       (root.classList.remove("menu-icon-only"), menuleft.classList.remove("menu-icon-only"), root.classList.remove("menu-wide"), menuleft.classList.remove("menu-wide"), s(), root.classList.remove("menu-hidden"), menuleft.classList.remove("menu-hidden"), e)
  //       ) {
  //       case "icon-only":
  //         root.classList.add("menu-icon-only"), menuleft.classList.add("menu-icon-only"), localStorage.setItem("menuType", "menu-icon-only"), r && showOverlay();
  //         break;
  //       case "wide":
  //         root.classList.add("menu-wide"), menuleft.classList.add("menu-wide"), localStorage.setItem("menuType", "menu-wide"), n(), r && hideOverlay();
  //         break;
  //       case "hidden":
  //         root.classList.add("menu-hidden"), menuleft.classList.add("menu-hidden"), localStorage.setItem("menuType", "menu-hidden"), a();
  //         break;
  //       default:
  //         localStorage.removeItem("menuType"), r && showOverlay(); //???
  //     }
  //   }

    function n() {
        menuleft.querySelector(".menu-header").classList.remove("hidden");
        menuleft.querySelectorAll(".menu-items .link").forEach((t) => {
          const e = t.dataset.target,
            r = menuleft.querySelector(".menu-detail" + e);
              r && (r.classList.add("collapse"),
              t.setAttribute("data-toggle", "collapse"),
              t.after(r));
        });
    }

    function s() {
      root.classList.remove("menu-wide");
        menuleft.classList.remove("menu-wide");
        menuleft.querySelector(".menu-header").classList.add("hidden");

        menuleft.querySelectorAll(".menu-items .link").forEach((t) => {
          const e = t.dataset.target;
            a = menuleft.querySelector(".menu-detail" + e);
          a && (a.classList.remove("collapse"), t.removeAttribute("data-toggle", "collapse"), menuitems.after(a));
        });
    }

  menuleft.classList.contains("menu-wide") && n(),
    on(".y-menu-left", "click", "[data-toggle='menu-type']", (t) => {
      const e = t.target.closest("[data-toggle='menu-type']").dataset.value;
      i(e);
    }),
    on("#customizer", "click", "[data-toggle='menu-type']", (t) => {
      const e = t.target.closest("[data-toggle='menu-type']").dataset.value;
      i(e);
    });
}

function showActivePage() {
  const t = window.location.href.split(/[?#]/)[0],
    e = document.querySelectorAll(".y-menu-left a");
  e &&
  e.forEach((e) => {
    if (e.href === t) {
      e.classList.add("is-active");
      const t = e.closest(".menu-detail");
      if (!t) return;
      document.querySelector('.menu-items .link[data-target="[data-menu=' + t.dataset.menu + ']"]').classList.add("is-active");
    }
  });
}

function showOverlay() {
    document.getElementById("overlay").style.display = "block";
}

function hideOverlay() {
    document.getElementById("overlay").style.display = "none";
}

// obsolete
// function sidebar() {
//   on("body", "click", '[data-toggle="sidebar"]', () => {
//     (() => {
//       const pullMenu = document.querySelector(".sidebar:not(.y-menu-pull_customizer)");
//       if (pullMenu.classList.contains("open")) {
//           pullMenu.classList.remove("open");
//           hideOverlay();
//       } else {
//           pullMenu.classList.add("open");
//           showOverlay(!0);
//       }
//     })();
//   });
// }


// function hideAllMenus() {
//   const menuTop = document.querySelector(".y-menu-top");
//   const menuLeft = document.querySelector(".y-menu-left");
//   const menuPull = document.querySelector(".y-menu-pull");
//   const screenFooterToggle = document.querySelector(".screen-footer-toggle");
//   const screenFooter = document.querySelector(".screen-footer");
//   menuTop.classList.add("hidden");
//   menuLeft.classList.add("hidden");
//   menuPull.classList.add("hidden");
//   screenFooterToggle.classList.add("hidden");
//   screenFooter.classList.add("hidden");
// }

function registerMenuHandlers() {
    menu();
    customizer();
    collapse();
    darkMode();
    showActivePage();
    // sidebar();

    setViewportWidth();
    //watchWidth();

    window.addEventListener(
    "resize",
    () => {
        setViewportWidth();
      //  watchWidth();
    },
    !1
);
}


export {registerMenuHandlers};
