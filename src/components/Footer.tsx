const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="text-center text-muted-foreground">
          <p className="text-sm">
            © {new Date().getFullYear()} Maria Bano. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
