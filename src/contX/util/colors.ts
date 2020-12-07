/**
 * css-color-keyword to hex to rgba
 * https://github.com/npm-opam/js_of_ocaml/blob/72a6727a4234eeea995bfcd4b53d93a1cadbb3f2/lib/cSS.ml
 * @see ./colors.ref.md
 */

// regexp to replace
// \| (\S+).+\((.+)\)
// `rgba($2, ${alpha})`, // $1

const alpha = '.8';

export const backColors = [
  // `rgba(250,235,215, ${alpha})`, // Antiquewhite
  `rgba(0,255,255, ${alpha})`, // Aqua
  `rgba(127,255,212, ${alpha})`, // Aquamarine
  // `rgba(240,255,255, ${alpha})`, // Azure
  // `rgba(245,245,220, ${alpha})`, // Beige
  `rgba(255,228,196, ${alpha})`, // Bisque
  // `rgba(0,0,0, ${alpha})`, // Black
  `rgba(255,235,205, ${alpha})`, // Blanchedalmond
  `rgba(0,0,255, ${alpha})`, // Blue
  `rgba(138,43,226, ${alpha})`, // Blueviolet
  `rgba(165,42,42, ${alpha})`, // Brown
  `rgba(222,184,135, ${alpha})`, // Burlywood
  `rgba(95,158,160, ${alpha})`, // Cadetblue
  `rgba(127,255,0, ${alpha})`, // Chartreuse
  `rgba(210,105,30, ${alpha})`, // Chocolate
  `rgba(255,127,80, ${alpha})`, // Coral
  `rgba(100,149,237, ${alpha})`, // Cornflowerblue
  `rgba(255,248,220, ${alpha})`, // Cornsilk
  `rgba(220,20,60, ${alpha})`, // Crimson
  `rgba(0,255,255, ${alpha})`, // Cyan
  `rgba(0,0,139, ${alpha})`, // Darkblue
  `rgba(0,139,139, ${alpha})`, // Darkcyan
  `rgba(184,134,11, ${alpha})`, // Darkgoldenrod
  `rgba(169,169,169, ${alpha})`, // Darkgray
  `rgba(0,100,0, ${alpha})`, // Darkgreen
  `rgba(169,169,169, ${alpha})`, // Darkgrey
  `rgba(189,183,107, ${alpha})`, // Darkkhaki
  `rgba(139,0,139, ${alpha})`, // Darkmagenta
  `rgba(85,107,47, ${alpha})`, // Darkolivegreen
  `rgba(255,140,0, ${alpha})`, // Darkorange
  `rgba(153,50,204, ${alpha})`, // Darkorchid
  `rgba(139,0,0, ${alpha})`, // Darkred
  `rgba(233,150,122, ${alpha})`, // Darksalmon
  `rgba(143,188,143, ${alpha})`, // Darkseagreen
  `rgba(72,61,139, ${alpha})`, // Darkslateblue
  `rgba(47,79,79, ${alpha})`, // Darkslategray
  `rgba(47,79,79, ${alpha})`, // Darkslategrey
  `rgba(0,206,209, ${alpha})`, // Darkturquoise
  `rgba(148,0,211, ${alpha})`, // Darkviolet
  `rgba(255,20,147, ${alpha})`, // Deeppink
  `rgba(0,191,255, ${alpha})`, // Deepskyblue
  `rgba(105,105,105, ${alpha})`, // Dimgray
  `rgba(105,105,105, ${alpha})`, // Dimgrey
  `rgba(30,144,255, ${alpha})`, // Dodgerblue
  `rgba(178,34,34, ${alpha})`, // Firebrick
  // `rgba(255,250,240, ${alpha})`, // Floralwhite
  `rgba(34,139,34, ${alpha})`, // Forestgreen
  `rgba(255,0,255, ${alpha})`, // Fuchsia
  `rgba(220,220,220, ${alpha})`, // Gainsboro
  // `rgba(248,248,255, ${alpha})`, // Ghostwhite
  `rgba(255,215,0, ${alpha})`, // Gold
  `rgba(218,165,32, ${alpha})`, // Goldenrod
  `rgba(128,128,128, ${alpha})`, // Gray
  `rgba(0,128,0, ${alpha})`, // Green
  `rgba(173,255,47, ${alpha})`, // Greenyellow
  `rgba(128,128,128, ${alpha})`, // Grey
  `rgba(240,255,240, ${alpha})`, // Honeydew
  `rgba(255,105,180, ${alpha})`, // Hotpink
  `rgba(205,92,92, ${alpha})`, // Indianred
  `rgba(75,0,130, ${alpha})`, // Indigo
  // `rgba(255,255,240, ${alpha})`, // Ivory
  `rgba(240,230,140, ${alpha})`, // Khaki
  // `rgba(230,230,250, ${alpha})`, // Lavender
  // `rgba(255,240,245, ${alpha})`, // Lavenderblush
  `rgba(124,252,0, ${alpha})`, // Lawngreen
  `rgba(255,250,205, ${alpha})`, // Lemonchiffon
  `rgba(173,216,230, ${alpha})`, // Lightblue
  `rgba(240,128,128, ${alpha})`, // Lightcoral
  // `rgba(224,255,255, ${alpha})`, // Lightcyan
  // `rgba(250,250,210, ${alpha})`, // Lightgoldenrodyellow
  `rgba(211,211,211, ${alpha})`, // Lightgray
  `rgba(144,238,144, ${alpha})`, // Lightgreen
  `rgba(211,211,211, ${alpha})`, // Lightgrey
  `rgba(255,182,193, ${alpha})`, // Lightpink
  `rgba(255,160,122, ${alpha})`, // Lightsalmon
  `rgba(32,178,170, ${alpha})`, // Lightseagreen
  `rgba(135,206,250, ${alpha})`, // Lightskyblue
  `rgba(119,136,153, ${alpha})`, // Lightslategray
  `rgba(119,136,153, ${alpha})`, // Lightslategrey
  `rgba(176,196,222, ${alpha})`, // Lightsteelblue
  // `rgba(255,255,224, ${alpha})`, // Lightyellow
  `rgba(0,255,0, ${alpha})`, // Lime
  `rgba(50,205,50, ${alpha})`, // Limegreen
  // `rgba(250,240,230, ${alpha})`, // Linen
  `rgba(255,0,255, ${alpha})`, // Magenta
  `rgba(128,0,0, ${alpha})`, // Maroon
  `rgba(102,205,170, ${alpha})`, // Mediumaquamarine
  `rgba(0,0,205, ${alpha})`, // Mediumblue
  `rgba(186,85,211, ${alpha})`, // Mediumorchid
  `rgba(147,112,219, ${alpha})`, // Mediumpurple
  `rgba(60,179,113, ${alpha})`, // Mediumseagreen
  `rgba(123,104,238, ${alpha})`, // Mediumslateblue
  `rgba(0,250,154, ${alpha})`, // Mediumspringgreen
  `rgba(72,209,204, ${alpha})`, // Mediumturquoise
  `rgba(199,21,133, ${alpha})`, // Mediumvioletred
  `rgba(25,25,112, ${alpha})`, // Midnightblue
  // `rgba(245,255,250, ${alpha})`, // Mintcream
  // `rgba(255,228,225, ${alpha})`, // Mistyrose
  `rgba(255,228,181, ${alpha})`, // Moccasin
  `rgba(255,222,173, ${alpha})`, // Navajowhite
  `rgba(0,0,128, ${alpha})`, // Navy
  // `rgba(253,245,230, ${alpha})`, // Oldlace
  `rgba(128,128,0, ${alpha})`, // Olive
  `rgba(107,142,35, ${alpha})`, // Olivedrab
  `rgba(255,165,0, ${alpha})`, // Orange
  `rgba(255,69,0, ${alpha})`, // Orangered
  `rgba(218,112,214, ${alpha})`, // Orchid
  `rgba(238,232,170, ${alpha})`, // Palegoldenrod
  `rgba(152,251,152, ${alpha})`, // Palegreen
  `rgba(175,238,238, ${alpha})`, // Paleturquoise
  `rgba(219,112,147, ${alpha})`, // Palevioletred
  // `rgba(255,239,213, ${alpha})`, // Papayawhip
  `rgba(255,218,185, ${alpha})`, // Peachpuff
  `rgba(205,133,63, ${alpha})`, // Peru
  `rgba(255,192,203, ${alpha})`, // Pink
  `rgba(221,160,221, ${alpha})`, // Plum
  `rgba(176,224,230, ${alpha})`, // Powderblue
  `rgba(128,0,128, ${alpha})`, // Purple
  `rgba(255,0,0, ${alpha})`, // Red
  `rgba(188,143,143, ${alpha})`, // Rosybrown
  `rgba(65,105,225, ${alpha})`, // Royalblue
  `rgba(139,69,19, ${alpha})`, // Saddlebrown
  `rgba(250,128,114, ${alpha})`, // Salmon
  `rgba(244,164,96, ${alpha})`, // Sandybrown
  `rgba(46,139,87, ${alpha})`, // Seagreen
  // `rgba(255,245,238, ${alpha})`, // Seashell
  `rgba(160,82,45, ${alpha})`, // Sienna
  `rgba(192,192,192, ${alpha})`, // Silver
  `rgba(135,206,235, ${alpha})`, // Skyblue
  `rgba(106,90,205, ${alpha})`, // Slateblue
  `rgba(112,128,144, ${alpha})`, // Slategray
  `rgba(112,128,144, ${alpha})`, // Slategrey
  // `rgba(255,250,250, ${alpha})`, // Snow
  `rgba(0,255,127, ${alpha})`, // Springgreen
  `rgba(70,130,180, ${alpha})`, // Steelblue
  `rgba(210,180,140, ${alpha})`, // Tan
  `rgba(0,128,128, ${alpha})`, // Teal
  `rgba(216,191,216, ${alpha})`, // Thistle
  `rgba(255,99,71, ${alpha})`, // Tomato
  `rgba(64,224,208, ${alpha})`, // Turquoise
  `rgba(238,130,238, ${alpha})`, // Violet
  `rgba(245,222,179, ${alpha})`, // Wheat
  // `rgba(255,255,255, ${alpha})`, // White
  // `rgba(245,245,245, ${alpha})`, // Whitesmoke
  `rgba(255,255,0, ${alpha})`, // Yellow
  `rgba(154,205,50, ${alpha})`, // Yellowgreen
];
