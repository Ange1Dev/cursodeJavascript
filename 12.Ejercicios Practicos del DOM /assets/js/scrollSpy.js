const d = document;

export default function scrollSpy() {
  const $sections = d.querySelectorAll("section[data-scroll-spy]");

  const cb = (entries) => {
    // console.log(entries)

    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const $li = d.querySelector(
        `li[data-scroll-spy][id="&${id}"]`
      );
      const $a = d.querySelector(`li[data-scroll-spy][id="&${id}"] a[href="#${id}"]`);

      //   console.log(entry.target.getAttribute("id"));

      if (entry.isIntersecting) {
        // console.log( 'ELEMENTO:',d.querySelector(`a[data-scroll-spy][href="#${id}"]`)
        $a.classList.add("active");
        $li.classList.add("active");
      } else {
        $li.classList.remove("active");
        $a.classList.remove("active");

      }
    });
  };
  const observer = new IntersectionObserver(cb, {
    // root
    rootMargin: "-300px"
  });
  $sections.forEach((el) => observer.observe(el));
}
