import Link from "next/link";

export default function UpdateFooter() {
    return (
      <div className="update-footer-section flex justify-center items-center p-4">
        <h3 className="text-white questrial">Developed by Team <strong><Link href="#members" className="team-link">Zoeo</Link></strong> for BuzzOnEarth India Hackathon 2024, supported by <strong>IIT Kanpur</strong> and powered by <strong>Intel</strong>.</h3>
      </div>
    );
  }
  