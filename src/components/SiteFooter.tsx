import { findPhotograph, footerPhoto, photoSrc } from "@/content/photographs";

// The photograph fades in from the page at its top edge; the captions sit on it
// in small paper labels, so the page simply ends on the picture.
const SiteFooter = () => {
  const entry = findPhotograph(footerPhoto.slug);

  return (
    <footer className="relative mt-28 md:mt-36">
      {entry && (
        <img
          src={photoSrc(entry.photo.slug)}
          alt={entry.photo.alt}
          width={entry.photo.width}
          height={entry.photo.height}
          loading="lazy"
          className="footer-photo block h-[clamp(340px,52vw,720px)] w-full object-cover object-[center_58%]"
        />
      )}
      <div className="page-column absolute inset-x-0 bottom-5 flex flex-wrap justify-between gap-2 md:bottom-8">
        <p className="mono footer-label">{footerPhoto.caption}</p>
        <p className="mono footer-label">© {new Date().getFullYear()} Harshdeep Parmar</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
