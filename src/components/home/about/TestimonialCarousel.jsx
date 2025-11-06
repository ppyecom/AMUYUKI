import React, { useState } from 'react'
import './testimonialCarousel.css'

const TestimonialCarousel = () => {

    const testimonials = [
    {
      id: 1,
      text: "Estudiar en AMUYUKI es divertido, el plan de estudios es completo, el instructor con IA es increíble y los objetivos asignados también son relevantes para la enseñanza cultural.",
      name: "Resky Fernanda",
      position: "Product Designer at Tokopedia",
      image: "https://i.pravatar.cc/150?img=1"
    },
    {
      id: 2,
      text: "La plataforma es intuitiva y fácil de usar. He aprendido mucho en poco tiempo gracias a la metodología interactiva.",
      name: "María González",
      position: "UX Designer at Google",
      image: "https://i.pravatar.cc/150?img=5"
    },
    {
      id: 3,
      text: "Los recursos educativos son excelentes y el soporte al estudiante es de primera clase. Totalmente recomendado.",
      name: "Carlos Mendoza",
      position: "Frontend Developer at Meta",
      image: "https://i.pravatar.cc/150?img=12"
    },
    {
      id: 4,
      text: "Me encanta cómo estructuran las lecciones. Cada módulo está bien pensado y es muy efectivo.",
      name: "Ana Silva",
      position: "UI Designer at Amazon",
      image: "https://i.pravatar.cc/150?img=9"
    },
    {
      id: 5,
      text: "La mejor inversión en mi educación. El contenido es actualizado y relevante para el mercado actual.",
      name: "Jorge Ramírez",
      position: "Software Engineer at Microsoft",
      image: "https://i.pravatar.cc/150?img=13"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-header">
        <h2 className="testimonial-title">Lo que dicen</h2>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToTestimonial(index)}
            />
          ))}
        </div>
      </div>

      <div className="testimonial-content">
        <blockquote className="testimonial-quote" style={{margin: testimonials[currentIndex] === 0 ? "0px" : "0 0 0"}}>
          "{testimonials[currentIndex].text}"
        </blockquote>

        <div className="testimonial-footer">
          <div className="testimonial-author">
            <img 
              src={testimonials[currentIndex].image} 
              alt={testimonials[currentIndex].name}
              className="author-image"
            />
            <div className="author-info">
              <h3 className="author-name">{testimonials[currentIndex].name}</h3>
              <p className="author-position">{testimonials[currentIndex].position}</p>
            </div>
          </div>

          <div className="testimonial-navigation">
            <button 
              className="nav-button prev"
              onClick={prevTestimonial}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className="nav-button next"
              onClick={nextTestimonial}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCarousel