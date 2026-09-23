import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/layout/shell";
import { profile } from "@/data/site";
import appCss from "../styles.css?url";

const APP_NAME = "Satish Rao N";
const DESCRIPTION =
  "Satish Rao N facilitates certifications across Salesforce, AWS, Azure, Microsoft, ServiceNow, Cisco, and Oracle. Experience taught him the right approach. Practices he built himself assure 98%.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#f3f7fb" },
      { name: "author", content: profile.name },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  notFoundComponent: NotFound,
  component: RootDocument,
});

function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70svh] max-w-xl flex-col justify-center px-5 pt-24">
      <p className="text-[11px] uppercase tracking-[0.18em] text-muted">404</p>
      <h1 className="font-display mt-3 text-4xl">This path is not on the map.</h1>
      <p className="mt-3 text-muted">The page you asked for does not exist. Head back to the estate.</p>
      <Link to="/" className="mt-8 text-sm font-medium underline-offset-4 hover:underline">
        Return home
      </Link>
    </div>
  );
}

function RootDocument() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.headline,
    email: profile.email,
    telephone: "+917259238044",
    description: DESCRIPTION,
  };

  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-svh bg-bg text-fg">
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("srn-theme");if(t==="dark")document.documentElement.classList.add("dark");else document.documentElement.classList.remove("dark");}catch(e){}`,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <PreviewHostBridge />
        <AuthProvider>
          <SiteShell>
            <Outlet />
          </SiteShell>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
