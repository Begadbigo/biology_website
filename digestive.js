// Scroll to a section by ID (e.g., when clicking "See the System")
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Organ data (add more organs here)
function showInfo(organId) {
  const infoBox = document.getElementById('infoBox');

  const organDetails = {
    spleen: `An organ located in the upper left 
abdominal quadrant behind the stomach; consists of
 lymphatic tissue that produces lymphocytes; also
 contains macrophages that phagocytize old red blood
 cells`,
    oralcavity: `Food enters the oral cavity (or buccal cavity) by way of
 the mouth. The boundaries of the oral cavity are the hard
 and soft palates superiorly; the cheeks laterally; and the
 floor of the mouth inferiorly. Within the oral cavity are
 the teeth and tongue and the openings of the ducts of the
 salivary glands.`,
    esophagus: ` The esophagusis a muscular tube that takes food from
 the pharynx to the stomach; no digestion takes place
 here. Peristalsis of the esophagus propels food in one
 direction and ensures that food gets to the stomach
 even if the body is horizontal or upside down. At the
 junction with the stomach, the lumen (cavity) of the
 esophagus is surrounded by the lower esophageal
 sphincter(LES or cardiac sphincter), a circular smooth
 muscle. The LES relaxes to permit food to enter the
 stomach, then contracts to prevent the backup of stom
ach contents. If the LES does not close completely, gas
tric juice may splash up into the esophagus; this is a
 painful condition we call heartburn, or gastroe
sophageal reflux disease (GERD). Most people experi
ence heartburn once in a while, and it is merely
 uncomfortable, but chronic GERD is more serious. The
 lining of the esophagus cannot withstand the corrosive
 action of gastric acid and will be damaged, perhaps re
sulting in bleeding or even perforation. Medications are
 available to treat this condition.`,
    stomach: ` The stomach is located in the upper left quadrant of the
 abdominal cavity, to the left of the liver and in front of the
 spleen. Although part of the alimentary tube, the stomach
 is not a tube, but rather a sac that extends from the esoph
agus to the small intestine. Because it is a sac, the stomach
 is a reservoir for food, so digestion proceeds gradually and
 we do not have to eat constantly. Both mechanical and
 chemical digestion take place in the stomach.`,
    liver: ` The liver consists of two large lobes, right and
 left, and fills the upper right and center of the abdominal
 cavity, just below the diaphragm. The structural unit of
 the liver is the liver lobule, a roughly hexagonal column
 of liver cells (hepatocytes). Between adjacent lobules are
 branches of the hepatic artery and portal vein. The capil
laries of a lobule are sinusoids, large and very permeable
 vessels between the rows of liver cells. The sinusoids re
ceive blood from both the hepatic artery and portal vein,and it is with this mixture of blood that the liver cells carry
 out their functions. The hepatic artery brings oxygenated
 blood, and the portal vein brings blood from the digestive
 organs and spleen. Each lob
ule has a central vein. The central veins of all the lobules
 unite to form the hepatic veins, which take blood out of
 the liver to the inferior vena cava.<br><br>
 The cells of the liver have many functions (which are
 discussed in a later section), but their only digestive func
tion is the production of bile. Bile enters the small bile
 ducts, called bile canaliculi, on the liver cells, which unite
 to form larger ducts and finally merge to form the hepatic
 duct, which takes bile out of the liver. The
 hepatic duct unites with the cystic duct of the gallbladder
 to form the common bile duct, which takes bile to the
 duodenum.<br><br>
 Bile is mostly water and has an excretory function in
 that it carries bilirubin and excess cholesterol to the intes
tines for elimination in feces. The digestive function of bile
 is accomplished by bile salts, which emulsifyfats in the
 small intestine. Emulsification means that large fat glob
ules are broken into smaller globules. This is mechanical,
 not chemical, digestion; the fat is still fat but now has more
 surface area to facilitate chemical digestion.<br><br>
 Production of bile is stimulated by the hormone se
cretin, which is produced by the duodenum when food
 enters the small intestine.
`,
    gallbladder: `The gallbladderis a sac about 3 to 4 inches (7.5 to 10 cm)
 long located on the undersurface of the right lobe of the
 liver. Bile in the hepatic duct of the liver flows through the
 cystic duct into the gallbladder, which
 stores bile until it is needed in the small intestine. The gall
bladder also concentrates bile by absorbing water.<br><br>
When fatty foods enter the duodenum, the enteroen
docrine cells of the duodenal mucosa secrete the hormone
 cholecystokinin. This hormone stimulates contraction of
 the smooth muscle in the wall of the gallbladder, which
 forces bile into the cystic duct, then into the common bile
 duct, and on into the duodenum.`,
    pancreas: ` The pancreasis located in the upper left abdominal quad
rant between the curve of the duodenum and the spleen
 and is about 6 inches (15 cm) in length. The endocrine
 functions of the pancreas were discussed in Chapter 10,
 so only the exocrine functions will be considered here. The
 exocrine glands of the pancreas are called acini (singular:
 acinus). They produce enzymes that are in
volved in the digestion of all three types of complex food
 molecules.<br><br>
 The pancreatic enzyme amylasedigests starch to malt
ose. You may recall that this is the “backup” enzyme for
 salivary amylase, though pancreatic amylase is responsible
 for most digestion of starch. Lipaseconverts emulsified
 fats to fatty acids and glycerol. The emulsifying or fat-sep
arating action of bile salts increases the surface area of fats
 so that lipase works effectively. Trypsinogen is an inactive
 enzyme that is changed to active trypsinin the duode
num. Trypsin digests polypeptides to shorter chains of
 amino acids.<br><br>
 The pancreatic enzyme juice is carried by small ducts
 that unite to form larger ducts, then finally the main
 pancreatic duct. An accessory duct may also be present.
 The main pancreatic duct emerges from the medial side
 of the pancreas and joins the common bile duct to the
 duodenum.<br><br>
 The pancreas also produces a bicarbonate juice(con
taining sodium bicarbonate), which is alkaline. Because
 the gastric juice that enters the duodenum is very acidic,
 it must be neutralized to prevent damage to the duodenal
 mucosa. This neutralizing is accomplished by the sodium
 bicarbonate in pancreatic juice, and the pH of the duode
nal chyme is raised to about 7.5.<br><br>
 Secretion of pancreatic juice is stimulated by the hor
mones secretin and cholecystokinin, which are produced
 by the duodenal mucosa when chyme enters the small in
testine. Secretinstimulates the production of bicarbonate
 juice by the pancreas, and cholecystokininstimulates the
 secretion of the pancreatic enzymes.`,
    duodenum: ` The duodenum is the first 10 inches (25 cm) of the
 small intestine. The common bile duct enters the duode
num at the ampulla of Vater (or hepatopancreatic am
pulla). The jejunum is about 8 feet long, and the ileum is
 about 11 feet in length. In a living person, however, the
 small intestine is always contracted and is therefore some
what shorter.`,
    small_intestines: `The small intestine is about 1 inch (2.5 cm) in diameter
 and approximately 20 feet (6 m) long and extends from
 the stomach to the cecum of the large intestine. Within
 the abdominal cavity, the large intestine encircles the coils
 of the small intestine`,
    large_intestines: ` The large intestine, also called the colon, is approximately
 2.5 inches (6.3 cm) in diameter and 5 feet (1.5 m) in
 length. It extends from the ileum of the small intestine to
 the anus, the terminal opening. The cecum is the first portion, and at
 its junction with the ileum is the ileocecal valve, which is
 not a sphincter but serves the same purpose. The ileocecal
 valve is a fold of the intestinal mucosa that surrounds the
 opening from ileum to cecum. After undigested food
 (which is now mostly cellulose) and water pass into the
 cecum, this fold is pressed flat during peristalsis and 
effectively closed, which prevents the backflow of fecal
 material into the ileum.<br><br>
 Attached to the cecum is the appendix, a small, dead
end tube with abundant lymphatic tissue. The appendix
 seems to be a vestigial organ, that is, one whose size and
 function seem to be reduced. Although there is abundant
 lymphatic tissue in the wall of the appendix, the possi
bility that the appendix has special functions concerned
 with immunity is not known with certainty. Appendici
tis is inflammation of the appendix, which may occur if
 fecal material becomes impacted within it. This usually
 necessitates an appendectomy, the surgical removal of
 the appendix.<br><br>
 The remainder of the colon consists of the ascending,
 transverse, and descending colon, which encircle the
 small intestine; the sigmoid colon, which turns medially
 and downward; the rectum; and the anal canal. The rec
tum is about 6 inches long, and the anal canal is the last
 inch of the colon that surrounds the anus. Clinically,
 however, the terminal end of the colon is usually referred
 to as the rectum.<br><br>
 No digestion takes place in the colon. The only secre
tion of the colonic mucosa is mucus, which lubricates the
 passage of fecal material. The longitudinal smooth muscle
 layer of the colon is in three bands called taeniae coli. The
 rest of the colon is “gathered” to fit these bands. This gives
 the colon a puckered appearance; the puckers or pockets
 are called haustra, which provide for more surface area
 within the colon.<br><br>
 The functions of the colon are the absorption of
 water, minerals, and vitamins and the elimination of
 undigestible material. Everything absorbed by the colon
 circulates first to the liver by way of portal circulation.
 About 80% of the water that enters the colon is absorbed
 (400 to 800 mL per day). Positive and negative ions are
 also absorbed. The vitamins absorbed are those pro
duced by the normal flora, the trillions of bacteria that live in
 the colon.`,
    abdominal_aorta: "The abdominal aorta supplies oxygenated blood to all abdominal and pelvic organs.",
    viens: "Veins return deoxygenated blood from the digestive organs to the heart."
  };

  const name = organId.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const text = organDetails[organId] || "Information not available for this organ.";

  infoBox.innerHTML = `
    <h2>${name}</h2>
    <p>${text}</p>
  `;
  infoBox.scrollIntoView({ behavior: 'smooth' });
}

function toggleOrgan(organId, checkbox) {
  // Organ groups: key is checkbox ID, value is list of SVG element IDs to show/hide
  const organGroups = {
    liver: ['liver', 'gallbladder'],
    stomach: ['stomach'],
    mouth: ['mouth'],
    esophagus: ['esophagus'],
    pancreas: ['pancreas'],
    duodenum: ['duodenum'],
    small_intestines: ['small_intestines'],
    large_intestines: ['large_intestines'],
    abdominal_aorta: ['abdominal_aorta'],
    viens: ['viens'],
    spleen: ['spleen']
  };

  const organs = organGroups[organId] || [organId];

  organs.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = checkbox.checked ? 'inline' : 'none';
  });
}
function resetSVG() {
  const wrapper = document.getElementById('svgWrapper');

  // Toggle the "shrunk" class
  if (wrapper.classList.contains('shrunk')) {
    wrapper.classList.remove('shrunk');
  } else {
    wrapper.classList.add('shrunk');
  }
}

function showVideo() {
  const container = document.getElementById('videoContainer');

  // Only load once
  if (!container.innerHTML) {
    container.innerHTML = `
      <iframe width="100%" height="400" 
        src="https://www.youtube.com/embed/X3TAROotFfM" 
        title="How Digestion Works"
        frameborder="0"
        allowfullscreen>
      </iframe>
    `;
  }

  container.style.display = 'block';
  container.scrollIntoView({ behavior: 'smooth' });
}
