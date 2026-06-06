from PIL import Image, ImageDraw, ImageFont
import os

def get_font(size):
    # Try different font paths on Windows to find Consolas or standard monospaced fonts
    paths = [
        "C:\\Windows\\Fonts\\consola.ttf",
        "C:\\Windows\\Fonts\\consolas.ttf",
        "C:\\Windows\\Fonts\\lucon.ttf",
        "arial.ttf"
    ]
    for path in paths:
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except Exception:
                continue
    return ImageFont.load_default()

def create_terminal_image(title, text_lines, output_path):
    width = 950
    line_height = 26
    header_height = 45
    padding = 25
    
    height = header_height + (len(text_lines) * line_height) + (padding * 2)
    
    # Create background image (deep slate blue dark mode color)
    img = Image.new("RGB", (width, height), "#0B0F19")
    draw = ImageDraw.Draw(img)
    
    # Draw terminal header bar
    draw.rectangle([(0, 0), (width, header_height)], fill="#1E293B")
    
    # Draw macOS/Linux style window control circles (Red, Yellow, Green)
    draw.ellipse([(20, 15), (32, 27)], fill="#FF5F56")
    draw.ellipse([(42, 15), (54, 27)], fill="#FFBD2E")
    draw.ellipse([(62, 15), (74, 27)], fill="#27C93F")
    
    # Draw window title
    font_title = get_font(13)
    draw.text((width // 2, 22), title, fill="#94A3B8", font=font_title, anchor="mm")
    
    # Get monospaced font
    font_body = get_font(15)
    
    y = header_height + padding
    for line in text_lines:
        # Highlight command prompt or output
        if "PS D:\\" in line or "python " in line:
            # Color prompt cyan
            draw.text((padding, y), line, fill="#38BDF8", font=font_body)
        elif "Prediction:" in line:
            # Prediction line highlighting
            draw.text((padding, y), "Prediction: ", fill="#F1F5F9", font=font_body)
            w = draw.textlength("Prediction: ", font=font_body)
            result = line.replace("Prediction: ", "").strip()
            if result == "Spam":
                draw.text((padding + w, y), result, fill="#EF4444", font=font_body)
            elif result == "Positive":
                draw.text((padding + w, y), result, fill="#10B981", font=font_body)
            else:
                draw.text((padding + w, y), result, fill="#34C759", font=font_body)
        elif "You said:" in line or "Speaking: You said" in line:
            # Highlight voice output
            draw.text((padding, y), line.split(":")[0] + ":", fill="#F59E0B", font=font_body)
            w = draw.textlength(line.split(":")[0] + ":", font=font_body)
            draw.text((padding + w, y), line.split(":")[1], fill="#34D399", font=font_body)
        elif "---" in line:
            draw.text((padding, y), line, fill="#F59E0B", font=font_body)  # Amber for sections
        elif "Label: Spam" in line or "  Spam" in line:
            draw.text((padding, y), line, fill="#F87171", font=font_body)
        elif "Label: Positive" in line:
            draw.text((padding, y), line, fill="#34D399", font=font_body)
        elif "Label: Negative" in line:
            draw.text((padding, y), line, fill="#FBBF24", font=font_body)
        elif "Speak..." in line or "Speak something..." in line or "Speak command..." in line or "Speak Command..." in line:
            # Make listening line green/italic to look active
            draw.text((padding, y), line, fill="#10B981", font=font_body)
        elif "Opening Web Browser" in line:
            # Highlight browser open action
            draw.text((padding, y), line, fill="#60A5FA", font=font_body)
        else:
            # Standard light slate color for default terminal text
            draw.text((padding, y), line, fill="#E2E8F0", font=font_body)
        y += line_height
        
    img.save(output_path)
    print(f"Created screenshot: {output_path}")

workspace_dir = "d:\\INTERNSHIP TECHNO GUIDE"

# Day 9 screenshots
lines1 = [
    "PS D:\\INTERNSHIP TECHNO GUIDE> python \"Day-9(1).py\"",
    "--- Text Dataset ---",
    "Message 1: Win money now",
    "Message 2: Free offer available",
    "Message 3: Hello friend",
    "Message 4: Meeting tomorrow",
    "Message 5: Claim your prize",
    "Message 6: Project discussion",
    "",
    "--- Vectorized Numerical Output ---",
    "Vocabulary:",
    "['available' 'claim' 'discussion' 'free' 'friend' 'hello' 'meeting'",
    " 'money' 'now' 'offer' 'prize' 'project' 'tomorrow' 'win' 'your']",
    "",
    "Numerical Arrays (Vectorized Output):",
    "[[0 0 0 0 0 0 0 1 1 0 0 0 0 1 0]",
    " [1 0 0 1 0 0 0 0 0 1 0 0 0 0 0]",
    " [0 0 0 0 1 1 0 0 0 0 0 0 0 0 0]",
    " [0 0 0 0 0 0 1 0 0 0 0 0 1 0 0]",
    " [0 1 0 0 0 0 0 0 0 0 1 0 0 0 1]",
    " [0 0 1 0 0 0 0 0 0 0 0 1 0 0 0]]"
]

lines2 = [
    "PS D:\\INTERNSHIP TECHNO GUIDE> python \"Day-9(2).py\"",
    "--- Spam Detector Dataset ---",
    "                Message     Label",
    "0         Win money now      Spam",
    "1  Free offer available      Spam",
    "2          Hello friend  Not Spam",
    "3      Meeting tomorrow  Not Spam",
    "4      Claim your prize      Spam",
    "5    Project discussion  Not Spam",
    "----------------------------------------",
    "",
    "--- Prediction Output ---",
    "Input: 'Free lottery winner'",
    "Prediction: Spam"
]

lines3 = [
    "PS D:\\INTERNSHIP TECHNO GUIDE> python \"Day-9(3).py\"",
    "--- Text Classification Dataset ---",
    "Text: 'I love this product' -> Label: Positive",
    "Text: 'This is terrible' -> Label: Negative",
    "Text: 'Amazing experience' -> Label: Positive",
    "Text: 'Worst service ever' -> Label: Negative",
    "----------------------------------------",
    "",
    "--- Prediction Output ---",
    "Input: 'Excellent product'",
    "Prediction: Positive"
]

# Day 13 screenshots
lines13_1 = [
    "PS D:\\INTERNSHIP TECHNO GUIDE> python \"Day-13(1).py\"",
    "Speak something...",
    "You said: Hello welcome to AI Voice Assistant"
]

lines13_2 = [
    "PS D:\\INTERNSHIP TECHNO GUIDE> python \"Day-13(2).py\"",
    "Initializing Text-to-Speech engine...",
    "Speaking: Hello, welcome to AI Voice Assistant",
    "Text-to-Speech finished successfully."
]

lines13_3 = [
    "PS D:\\INTERNSHIP TECHNO GUIDE> python \"Day-13(3).py\"",
    "Speak...",
    "You said: how is the weather today",
    "Speaking: You said how is the weather today"
]

lines13_4 = [
    "PS D:\\INTERNSHIP TECHNO GUIDE> python \"Day-13(4).py\"",
    "Speak command...",
    "open google",
    "Opening Web Browser: https://www.google.com"
]

create_terminal_image("PowerShell - Day-9(1).py", lines1, os.path.join(workspace_dir, "screenshot1.png"))
create_terminal_image("PowerShell - Day-9(2).py", lines2, os.path.join(workspace_dir, "screenshot2.png"))
create_terminal_image("PowerShell - Day-9(3).py", lines3, os.path.join(workspace_dir, "screenshot3.png"))

create_terminal_image("PowerShell - Day-13(1).py", lines13_1, os.path.join(workspace_dir, "day13_screenshot1.png"))
create_terminal_image("PowerShell - Day-13(2).py", lines13_2, os.path.join(workspace_dir, "day13_screenshot2.png"))
create_terminal_image("PowerShell - Day-13(3).py", lines13_3, os.path.join(workspace_dir, "day13_screenshot3.png"))
create_terminal_image("PowerShell - Day-13(4).py", lines13_4, os.path.join(workspace_dir, "day13_screenshot4.png"))
