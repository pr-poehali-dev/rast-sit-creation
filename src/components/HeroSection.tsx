import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-rust-dark via-rust-purple to-rust-blue overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-rust-orange/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-60 right-20 w-48 h-48 bg-rust-blue/20 rounded-full blur-xl animate-float animation-delay-1000"></div>
        <div className="absolute bottom-40 left-1/3 w-24 h-24 bg-rust-purple/30 rounded-full blur-xl animate-float animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center">
          {/* Main heading */}
          <div className="mb-8">
            <h1 className="font-heading text-6xl md:text-8xl font-bold text-white mb-4">
              Изучай
              <span className="bg-rust-gradient bg-clip-text text-transparent animate-pulse-glow">
                {" "}
                Rust
              </span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Самый быстрый и безопасный путь в мир системного программирования.
              Начни с основ и создавай потрясающие проекты уже сегодня! 🦀
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-rust-orange hover:bg-rust-orange/90 text-white font-heading font-semibold px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Icon name="Rocket" className="mr-2" size={24} />
              Начать обучение
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 font-heading font-semibold px-8 py-6 text-lg backdrop-blur-sm transition-all duration-300"
            >
              <Icon name="BookOpen" className="mr-2" size={24} />
              Посмотреть примеры
            </Button>
          </div>

          {/* Features cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-rust-orange/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={32} className="text-rust-orange" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-2">
                  Быстрый старт
                </h3>
                <p className="font-body text-white/80">
                  Изучай основы Rust с интерактивными примерами и простыми
                  объяснениями
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-rust-purple/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-rust-purple" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-2">
                  Безопасность
                </h3>
                <p className="font-body text-white/80">
                  Изучи систему владения и borrowing для написания безопасного
                  кода
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-rust-blue/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Code" size={32} className="text-rust-blue" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-2">
                  Практика
                </h3>
                <p className="font-body text-white/80">
                  Реальные проекты и задачи для закрепления полученных знаний
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
