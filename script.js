const year = new Date().getFullYear();
document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = year;
});

const copyButton = document.querySelector("[data-copy-citation]");
const citation = document.querySelector("#bibtex code");

copyButton?.addEventListener("click", async () => {
  if (!citation) return;

  try {
    await navigator.clipboard.writeText(citation.textContent.trim());
    const originalLabel = copyButton.textContent;
    copyButton.textContent = "Copied";
    window.setTimeout(() => {
      copyButton.textContent = originalLabel;
    }, 1600);
  } catch {
    copyButton.textContent = "Select manually";
  }
});
