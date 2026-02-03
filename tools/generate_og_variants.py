from PIL import Image, ImageDraw, ImageFont
import os
os.makedirs('assets/images', exist_ok=True)

bg = (197,153,182)  # approx of #C599B6
w,h = 1200,1200
img = Image.new('RGB',(w,h),bg)
d = ImageDraw.Draw(img)
try:
    font = ImageFont.truetype('arial.ttf', 140)
except Exception:
    font = ImageFont.load_default()
text = 'ionXtech'
# center
bbox = d.textbbox((0,0), text, font=font)
tw = bbox[2]-bbox[0]
th = bbox[3]-bbox[1]
d.text(((w-tw)/2,(h-th)/2-40), text, font=font, fill=(255,255,255))
# subtitle
try:
    subfont = ImageFont.truetype('arial.ttf', 30)
except Exception:
    subfont = ImageFont.load_default()
sub = 'Simple technology. Powerful results.'
bb = d.textbbox((0,0), sub, font=subfont)
sw = bb[2]-bb[0]
sh = bb[3]-bb[1]
d.text(((w-sw)/2,(h-sh)/2+60), sub, font=subfont, fill=(255,255,255))
img.save('assets/images/og-image-square.png','PNG')
print('Saved assets/images/og-image-square.png')

# small banner
w2,h2 = 600,315
img2 = Image.new('RGB',(w2,h2),bg)
d2 = ImageDraw.Draw(img2)
try:
    font2 = ImageFont.truetype('arial.ttf', 56)
except Exception:
    font2 = ImageFont.load_default()
text = 'ionXtech'
bbox2 = d2.textbbox((0,0), text, font=font2)
tw2 = bbox2[2]-bbox2[0]
th2 = bbox2[3]-bbox2[1]
d2.text(((w2-tw2)/2,(h2-th2)/2-10), text, font=font2, fill=(255,255,255))
img2.save('assets/images/og-image-small.png','PNG')
print('Saved assets/images/og-image-small.png')
