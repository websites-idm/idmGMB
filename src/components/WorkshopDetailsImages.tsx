import Image from "next/image";

export function WorkshopDetailsImages() {
  return (
    <section className="py-16 bg-muted/10">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white hover:scale-[1.02] transition-transform duration-500">
            <Image 
              src="/details2.jpeg" 
              alt="Workshop Details 2" 
              width={800} 
              height={1000} 
              className="w-full h-auto object-cover"
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
