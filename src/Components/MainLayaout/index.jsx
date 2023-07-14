function MainLayout({ children }) {

  return (
    <section className="flex flex-col items-center mt-20">
        {children}
    </section>
  );
}

export { MainLayout };