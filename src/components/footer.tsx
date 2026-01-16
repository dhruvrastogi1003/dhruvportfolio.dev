
export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Dhruv Rastogi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
