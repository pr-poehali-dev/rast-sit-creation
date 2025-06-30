import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Главная", href: "#home", icon: "Home" },
    { name: "Основы", href: "#basics", icon: "BookOpen" },
    { name: "Примеры", href: "#examples", icon: "Code" },
    { name: "Ресурсы", href: "#resources", icon: "Library" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-rust-gradient p-2 rounded-lg">
              <Icon name="Cpu" size={24} className="text-white" />
            </div>
            <span className="font-heading text-xl font-bold text-white">
              RustLearn
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-body text-white/90 hover:text-white transition-all duration-300 flex items-center space-x-2 hover:bg-white/10 px-3 py-2 rounded-lg"
              >
                <Icon name={item.icon as any} size={18} />
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden md:block">
            <Button className="bg-rust-orange hover:bg-rust-orange/90 text-white font-heading font-semibold transition-all duration-300">
              <Icon name="Rocket" className="mr-2" size={18} />
              Начать
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-white/10"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-body text-white/90 hover:text-white transition-all duration-300 flex items-center space-x-3 hover:bg-white/10 px-3 py-2 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span>{item.name}</span>
                </a>
              ))}
              <div className="pt-3 border-t border-white/20">
                <Button className="w-full bg-rust-orange hover:bg-rust-orange/90 text-white font-heading font-semibold">
                  <Icon name="Rocket" className="mr-2" size={18} />
                  Начать обучение
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
