import cemagiBefore from "./assets/cemagibefore.jpg";
import cemagiAfter from "./assets/cemagiafter.jpg";
import loftBefore from "./assets/loftbefore.jpg";
import loftAfter from "./assets/loftafter.jpg";
import tumbakAfter from "./assets/tumbakafter.jpg";
import tumbakBefore from "./assets/tumbakbefore.jpg";
import villaPreview1 from "./assets/previewtumbak.jpg";
import villaPreview2 from "./assets/previewcemagi.jpg";
import villaPreview3 from "./assets/previewloft.jpg";
import villaPreview4 from "./assets/previewalive.jpg";

export const villaRenos = [
  {
    id: 1,
    villa: "tumbak bayuh",
    before: tumbakBefore,
    after: tumbakAfter,
    seeVilla: "tumbakbayuh",
    description: "Modern Meets Industrial",
    availability: "For Sale",
    villaPreview: villaPreview1,
  },
  {
    id: 2,
    villa: "cemagi",
    before: cemagiBefore,
    after: cemagiAfter,
    seeVilla: "cemagi",
    description: "Bohiemian Rustic",
    availability: "For Sale",
    villaPreview: villaPreview2,
  },
  {
    id: 3,
    villa: "loft",
    before: loftBefore,
    after: loftAfter,
    seeVilla: "loft",
    description: "Industrial Lost ",
    availability: "For Sale",
    villaPreview: villaPreview3,
  },
  {
    id: 4,
    villa: "alive",
    seeVilla: "alive",
    description: "Health & Wellness Organic Shop ",
    availability: "Contract Work",
    villaPreview: villaPreview4,
  },
];
