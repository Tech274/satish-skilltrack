import { Link } from "@tanstack/react-router";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { Avatar } from "@/components/layout/portrait";
import { profile, skilltrack } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-5 py-16 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <Avatar src={profile.portraits.square} alt="" className="size-11" />
            <div>
              <p className="text-sm font-medium">{profile.name}</p>
              <p className="text-sm text-muted">{profile.headline}</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm text-muted">{profile.tagline.replace("\n", " ")}</p>
          <a
            href={skilltrack.url}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-3 text-sm font-medium text-fg hover:text-primary"
          >
            <img src={skilltrack.mark} alt="" className="h-10 w-auto rounded bg-white object-contain" />
            {skilltrack.name}
          </a>
        </div>
        <div className="md:col-span-3">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">Navigate</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/" hash="about" className="text-fg hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link to="/work" className="text-fg hover:text-primary">
                Work
              </Link>
            </li>
            <li>
              <Link to="/resume" className="text-fg hover:text-primary">
                Resume
              </Link>
            </li>
            <li>
              <Link to="/journal" className="text-fg hover:text-primary">
                Journal
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-fg hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2 text-fg">
              <Mail className="size-4 text-muted" />
              <a href={profile.emailHref} className="hover:text-primary">
                {profile.email}
              </a>
            </li>
            <li className="flex items-center gap-2 text-fg">
              <Phone className="size-4 text-muted" />
              <a href={profile.phoneHref} className="hover:text-primary">
                {profile.phone}
              </a>
            </li>
            <li className="flex items-center gap-2 text-muted">
              <MapPin className="size-4" />
              {profile.location}
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-6xl items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <button
          type="button"
          className="inline-flex items-center gap-1.5 text-fg"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to top <ArrowUp className="size-3.5" />
        </button>
      </div>
    </footer>
  );
}
