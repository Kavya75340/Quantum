import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/component/ui/button";
import { Badge } from "@/component/ui/badge";
import { Input } from "@/component/ui/input";
import {
    Calendar,
    Clock,
    User,
    ArrowRight,
    Search,
    TrendingUp,
    BookOpen,
    Sparkles,
    Mail,
} from "lucide-react";

const categories = [
    { name: "All", count: 24 },
    { name: "Cybersecurity", count: 8 },
    { name: "Cloud Computing", count: 6 },
    { name: "AI & ML", count: 5 },
    { name: "DevOps", count: 3 },
    { name: "Career Tips", count: 2 },
];

const featuredPost = {
    title: "The Complete Guide to Zero Trust Security Architecture in 2026",
    excerpt:
        "Learn how to implement a comprehensive zero trust security model that protects your organization from modern cyber threats. This guide covers everything from identity verification to micro-segmentation.",
    author: "Dr. Sarah Chen",
    authorRole: "Chief Security Officer",
    date: "Feb 4, 2026",
    readTime: "12 min read",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
};

const blogPosts = [
    {
        id: 1,
        title: "5 Essential Cloud Certifications for 2026",
        excerpt:
            "Discover which cloud certifications will give you the competitive edge in today's job market.",
        author: "Michael Torres",
        date: "Feb 2, 2026",
        readTime: "8 min read",
        category: "Cloud Computing",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
        trending: true,
    },
    {
        id: 2,
        title: "Machine Learning Ops: From Model to Production",
        excerpt:
            "A practical guide to deploying and maintaining ML models in production environments.",
        author: "Dr. Emily Watson",
        date: "Jan 30, 2026",
        readTime: "10 min read",
        category: "AI & ML",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80",
        trending: true,
    },
    {
        id: 3,
        title: "Kubernetes Security Best Practices",
        excerpt:
            "Secure your container orchestration with these proven security strategies.",
        author: "James Park",
        date: "Jan 28, 2026",
        readTime: "7 min read",
        category: "DevOps",
        image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&q=80",
        trending: false,
    },
    {
        id: 4,
        title: "Breaking into Tech: A Non-Traditional Path",
        excerpt:
            "How to transition into a tech career without a computer science degree.",
        author: "Lisa Rodriguez",
        date: "Jan 25, 2026",
        readTime: "6 min read",
        category: "Career Tips",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80",
        trending: false,
    },
    {
        id: 5,
        title: "Understanding Ransomware: Prevention & Response",
        excerpt:
            "A comprehensive look at ransomware threats and how to protect your organization.",
        author: "Dr. Sarah Chen",
        date: "Jan 22, 2026",
        readTime: "9 min read",
        category: "Cybersecurity",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80",
        trending: true,
    },
    {
        id: 6,
        title: "Serverless Architecture: When and Why",
        excerpt:
            "Explore the benefits and trade-offs of going serverless for your next project.",
        author: "Alex Kim",
        date: "Jan 20, 2026",
        readTime: "8 min read",
        category: "Cloud Computing",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
        trending: false,
    },
];

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = blogPosts.filter((post) => {
        const matchesCategory =
            activeCategory === "All" || post.category === activeCategory;
        const matchesSearch =
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-12"
                    >
                        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                            <Sparkles className="w-3 h-3 mr-1" />
                            Quantum Training Blog
                        </Badge>
                        <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                            Insights & Knowledge
                            <span className="block gradient-text">
                                From Industry Experts
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Stay ahead with the latest trends, tutorials, and
                            career advice in cybersecurity, cloud computing, AI,
                            and more.
                        </p>
                    </motion.div>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-xl mx-auto mb-12"
                    >
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-12 h-14 text-lg glass-card border-border/50 focus:border-primary"
                            />
                        </div>
                    </motion.div>

                    {/* Categories */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-3 mb-16"
                    >
                        {categories.map((category) => (
                            <button
                                key={category.name}
                                onClick={() => setActiveCategory(category.name)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                    activeCategory === category.name
                                        ? "bg-primary text-primary-foreground shadow-lg"
                                        : "glass-card text-muted-foreground hover:text-foreground hover:border-primary/50"
                                }`}
                            >
                                {category.name}
                                <span className="ml-2 opacity-60">
                                    ({category.count})
                                </span>
                            </button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="pb-16">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="glass-card overflow-hidden hover-lift">
                            <div className="grid md:grid-cols-2 gap-0">
                                <div className="relative h-64 md:h-auto">
                                    <img
                                        src={featuredPost.image}
                                        alt={featuredPost.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent md:hidden" />
                                </div>
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Badge className="bg-primary/10 text-primary border-primary/20">
                                            Featured
                                        </Badge>
                                        <Badge variant="outline">
                                            {featuredPost.category}
                                        </Badge>
                                    </div>
                                    <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer">
                                        {featuredPost.title}
                                    </h2>
                                    <p className="text-muted-foreground mb-6 line-clamp-3">
                                        {featuredPost.excerpt}
                                    </p>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="flex items-center gap-2">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                                <User className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-sm">
                                                    {featuredPost.author}
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    {featuredPost.authorRole}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {featuredPost.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {featuredPost.readTime}
                                            </span>
                                        </div>
                                    </div>
                                    <Button className="w-fit bg-primary hover:bg-primary/90 text-primary-foreground group">
                                        Read Article
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Trending Section */}
            <section className="py-16 bg-secondary/30">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="font-display text-2xl font-bold">
                            Trending Now
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {blogPosts
                            .filter((post) => post.trending)
                            .map((post, index) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    className="glass-card overflow-hidden hover-lift group cursor-pointer"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                                        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                                            <TrendingUp className="w-3 h-3 mr-1" />
                                            Trending
                                        </Badge>
                                    </div>
                                    <div className="p-6">
                                        <Badge
                                            variant="outline"
                                            className="mb-3"
                                        >
                                            {post.category}
                                        </Badge>
                                        <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <User className="w-3 h-3" />
                                                {post.author}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {post.readTime}
                                            </span>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                    </div>
                </div>
            </section>

            {/* All Posts Grid */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <BookOpen className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="font-display text-2xl font-bold">
                            All Articles
                        </h2>
                    </motion.div>

                    {filteredPosts.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post, index) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    className="glass-card overflow-hidden hover-lift group cursor-pointer"
                                >
                                    <div className="relative h-52 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Badge
                                                variant="outline"
                                                className="text-xs"
                                            >
                                                {post.category}
                                            </Badge>
                                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {post.date}
                                            </span>
                                        </div>
                                        <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between pt-4 border-t border-border">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                                    <User className="w-4 h-4 text-primary" />
                                                </div>
                                                <span className="text-sm font-medium">
                                                    {post.author}
                                                </span>
                                            </div>
                                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {post.readTime}
                                            </span>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-6 flex items-center justify-center">
                                <Search className="w-10 h-10 text-muted-foreground" />
                            </div>
                            <h3 className="font-display text-xl font-semibold mb-2">
                                No articles found
                            </h3>
                            <p className="text-muted-foreground">
                                Try adjusting your search or filter criteria
                            </p>
                        </div>
                    )}

                    {/* Load More */}
                    {filteredPosts.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-center mt-12"
                        >
                            <Button
                                variant="outline"
                                size="lg"
                                className="group"
                            >
                                Load More Articles
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-20 bg-primary/5 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto text-center"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                            <Mail className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                            Stay <span className="gradient-text">Updated</span>
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            Get the latest articles, tutorials, and industry
                            insights delivered straight to your inbox. Join
                            25,000+ tech professionals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="h-12 glass-card border-border/50 focus:border-primary"
                            />
                            <Button className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap">
                                Subscribe
                            </Button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-4">
                            No spam, unsubscribe anytime. Read our privacy
                            policy.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
