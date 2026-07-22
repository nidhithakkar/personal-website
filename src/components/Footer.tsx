export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-5 sm:flex-row sm:items-center md:px-8">
        <p className="font-display text-sm font-semibold text-white">
          Nidhi Thakkar
        </p>
        <p className="text-sm text-muted">© {year} Nidhi Thakkar</p>
      </div>
    </footer>
  );
}
