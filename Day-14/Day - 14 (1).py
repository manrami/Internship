# AI Social Media Caption Generator

topic = input("Enter Topic: ")
platform = input("Enter Platform (Instagram/Facebook/LinkedIn): ")

captions = {
    "Instagram": f"🚀 Explore the power of {topic}! Stay ahead with innovation and technology. #AI #Technology #{topic.replace(' ', '')}",
    
    "Facebook": f"Discover how {topic} is transforming the future. Learn, innovate, and grow with the latest advancements in technology.",
    
    "LinkedIn": f"Professional growth begins with knowledge. {topic} is creating new opportunities and shaping the future of industries worldwide."
}

if platform in captions:
    print("\nGenerated Caption:")
    print(captions[platform])
else:
    print("Platform not supported.")