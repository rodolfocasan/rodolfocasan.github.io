// src/app/edu/international/Schools/Google.jsx
'use client'
import React, { useState, useEffect } from 'react'
import { FaGoogle, FaCloud, FaRobot, FaImage, FaCertificate, FaExternalLinkAlt, FaAward, FaBrain } from 'react-icons/fa'
import { HiAcademicCap, HiSparkles, HiLightBulb } from 'react-icons/hi'
import { SiGooglecloud, SiTensorflow } from 'react-icons/si'
import { v4 as uuidv4 } from 'uuid'





const googleCertifications = [
    {
        title: "Introduction to Vertex AI Studio",
        description: "This course introduces Vertex AI Studio, a tool to interact with generative AI models, prototype business ideas, and launch them into production. Through an immersive use case, engaging lessons, and a hands-on lab, you'll explore the prompt-to-product lifecycle and learn how to leverage Vertex AI Studio for Gemini multimodal applications, prompt design, prompt engineering, and model tuning. The aim is to enable you to unlock the potential of gen AI in your projects with Vertex AI Studio.",
        certificateUrl: "https://www.cloudskillsboost.google/public_profiles/a39a2614-1e93-416c-85d9-b1a1667af555/badges/6561999",
        imageUrl: "https://cdn.qwiklabs.com/aKRJVKQ2I4SurWcADBxhOOvtgS4nCRLpDm5gDrdfZNA%3D",
        icon: <FaRobot className="w-6 h-6" />,
        category: "Vertex AI",
        skills: ["Generative AI", "Vertex AI Studio", "Prompt Engineering", "Model Tuning", "Gemini"],
        color: "from-green-400 to-blue-500"
    },
    {
        title: "Create Image Captioning Models",
        description: "This course teaches you how to create an image captioning model by using deep learning. You learn about the different components of an image captioning model, such as the encoder and decoder, and how to train and evaluate your model. By the end of this course, you will be able to create your own image captioning models and use them to generate captions for images",
        certificateUrl: "https://www.cloudskillsboost.google/public_profiles/a39a2614-1e93-416c-85d9-b1a1667af555/badges/6561934",
        imageUrl: "https://cdn.qwiklabs.com/WPuuvcRwXIXR%2F0akevn67yfVhi8K8irbAfw4lebrF4Y%3D",
        icon: <FaImage className="w-6 h-6" />,
        category: "Deep Learning",
        skills: ["Deep Learning", "Image Captioning", "Encoder-Decoder", "Model Training", "Computer Vision"],
        color: "from-blue-400 to-purple-500"
    },
    {
        title: "Transformer Models and BERT Model",
        description: "This course introduces you to the Transformer architecture and the Bidirectional Encoder Representations from Transformers (BERT) model. You learn about the main components of the Transformer architecture, such as the self-attention mechanism, and how it is used to build the BERT model. You also learn about the different tasks that BERT can be used for, such as text classification, question answering, and natural language inference. This course is estimated to take approximately 45 minutes to complete.",
        certificateUrl: "https://www.cloudskillsboost.google/public_profiles/a39a2614-1e93-416c-85d9-b1a1667af555/badges/6561891",
        imageUrl: "https://cdn.qwiklabs.com/g%2B5usP7T8amSi2jc4IdM68KZ%2Fu0pLLKRHRl4xQUHSSA%3D",
        icon: <FaBrain className="w-6 h-6" />,
        category: "Machine Learning",
        skills: ["Transformer", "BERT", "Self-Attention", "Text Classification", "Question Answering", "NLP"],
        color: "from-purple-400 to-pink-500"
    },
    {
        title: "Encoder-Decoder Architecture",
        description: "This course gives you a synopsis of the encoder-decoder architecture, which is a powerful and prevalent machine learning architecture for sequence-to-sequence tasks such as machine translation, text summarization, and question answering. You learn about the main components of the encoder-decoder architecture and how to train and serve these models. In the corresponding lab walkthrough, you'll code in TensorFlow a simple implementation of the encoder-decoder architecture for poetry generation from the beginning.",
        certificateUrl: "https://www.cloudskillsboost.google/public_profiles/a39a2614-1e93-416c-85d9-b1a1667af555/badges/6561801",
        imageUrl: "https://cdn.qwiklabs.com/ENQb28deAybjaN0piz5hSR2WovRbdKIR5BaeUs2PT8Q%3D",
        icon: <SiTensorflow className="w-6 h-6" />,
        category: "Machine Learning",
        skills: ["Encoder-Decoder", "Sequence-to-Sequence", "Machine Translation", "Text Summarization", "TensorFlow"],
        color: "from-orange-400 to-red-500"
    },
    {
        title: "Attention Mechanism",
        description: "This course will introduce you to the attention mechanism, a powerful technique that allows neural networks to focus on specific parts of an input sequence. You will learn how attention works, and how it can be used to improve the performance of a variety of machine learning tasks, including machine translation, text summarization, and question answering. This course is estimated to take approximately 45 minutes to complete.",
        certificateUrl: "https://www.cloudskillsboost.google/public_profiles/a39a2614-1e93-416c-85d9-b1a1667af555/badges/6561746",
        imageUrl: "https://cdn.qwiklabs.com/vSImcZnyNa76mG4DFESig0igeMgXC1D1AAA3yeiWmj8%3D",
        icon: <HiLightBulb className=" in h-6" />,
        category: "Machine Learning",
        skills: ["Attention Mechanism", "Neural Networks", "Machine Translation", "Text Summarization", "Question Answering"],
        color: "from-yellow-400 to-orange-500"
    },
    {
        title: "Introduction to Image Generation",
        description: "This course introduces diffusion models, a family of machine learning models that recently showed promise in the image generation space. Diffusion models draw inspiration from physics, specifically thermodynamics. Within the last few years, diffusion models became popular in both research and industry. Diffusion models underpin many state-of-the-art image generation models and tools on Google Cloud. This course introduces you to the theory behind diffusion models and how to train and deploy them on Vertex AI.",
        certificateUrl: "https://www.cloudskillsboost.google/public_profiles/a39a2614-1e93-416c-85d9-b1a1667af555/badges/6560808",
        imageUrl: "https://cdn.qwiklabs.com/AaMvmhDLJJ1cVWvUlFuuphsYDxSW51QBn3h3XAzaFO0%3D",
        icon: <FaImage className="w-6 h-6" />,
        category: "Generative AI",
        skills: ["Diffusion Models", "Image Generation", "Vertex AI", "Computer Vision", "Generative AI"],
        color: "from-indigo-400 to-purple-500"
    },
    {
        title: "Responsible AI: Applying AI Principles with Google Cloud",
        description: "As the use of enterprise Artificial Intelligence and Machine Learning continues to grow, so too does the importance of building it responsibly. A challenge for many is that talking about responsible AI can be easier than putting it into practice. If you're interested in learning how to operationalize responsible AI in your organization, this course is for you. In this course, you will learn how Google Cloud does this today, together with best practices and lessons learned, to serve as a framework for you to build your own responsible AI approach.",
        certificateUrl: "https://www.cloudskillsboost.google/public_profiles/a39a2614-1e93-416c-85d9-b1a1667af555/badges/6560497",
        imageUrl: "https://cdn.qwiklabs.com/mE1OIu8RnFLwp%2FUz3cUiG1RSIS4IDxM8yPkgjUzPGH8%3D",
        icon: <FaAward className="w-6 h-6" />,
        category: "AI Ethics",
        skills: ["Responsible AI", "AI Ethics", "Best Practices", "Enterprise AI", "Google Cloud"],
        color: "from-green-400 to-teal-500"
    },
    {
        title: "Generative AI Fundamentals",
        description: "Earn a skill badge by completing the Introduction to Generative AI, Introduction to Large Language Models and Introduction to Responsible AI courses. By passing the final quiz, you'll demonstrate your understanding of foundational concepts in generative AI. A skill badge is a digital badge issued by Google Cloud in recognition of your knowledge of Google Cloud products and services. Share your skill badge by making your profile public and adding it to your social media profile.",
        certificateUrl: "https://www.cloudskillsboost.google/public_profiles/a39a2614-1e93-416c-85d9-b1a1667af555/badges/6560433",
        imageUrl: "https://cdn.qwiklabs.com/tRMDHDRj1WoAD0egMEF9l3qHNe0a4nbG53DyrhOLLMo%3D",
        icon: <HiSparkles className="w-6 h-6" />,
        category: "Generative AI",
        skills: ["Generative AI", "Large Language Models", "Responsible AI", "Google Cloud", "Skill Badge"],
        color: "from-pink-400 to-red-500"
    },
    {
        title: "Introduction to Large Language Models",
        description: "This is an introductory level micro-learning course that explores what large language models (LLM) are, the use cases where they can be utilized, and how you can use prompt tuning to enhance LLM performance. It also covers Google tools to help you develop your own Gen AI apps.",
        certificateUrl: "https://www.cloudskillsboost.google/public_profiles/a39a2614-1e93-416c-85d9-b1a1667af555/badges/6560041",
        imageUrl: "https://cdn.qwiklabs.com/EOQVOqIBYEI7vPXkfrMJBO5YPdklPeCTAZmxxQm9MF0%3D",
        icon: <FaBrain className="w-6 h-6" />,
        category: "Large Language Models",
        skills: ["Large Language Models", "Prompt Tuning", "LLM Performance", "Gen AI Apps", "Google Tools"],
        color: "from-blue-400 to-indigo-500"
    },
    {
        title: "Introduction to Generative AI",
        description: "This is an introductory level microlearning course aimed at explaining what Generative AI is, how it is used, and how it differs from traditional machine learning methods. It also covers Google Tools to help you develop your own Gen AI apps.",
        certificateUrl: "https://www.cloudskillsboost.google/public_profiles/a39a2614-1e93-416c-85d9-b1a1667af555/badges/6559872",
        imageUrl: "https://cdn.qwiklabs.com/k818RWx33jhv%2FiUD1EREu9zt3zwqqK5SkqjLiJzXhek%3D",
        icon: <FaRobot className="w-6 h-6" />,
        category: "Generative AI",
        skills: ["Generative AI", "Machine Learning", "Google Tools", "Gen AI Apps", "AI Fundamentals"],
        color: "from-emerald-400 to-green-500"
    },
    {
        title: "Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud - Locales",
        description: "This course, Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud - Locales, is intended for non-English learners. If you want to take this course in English, please enroll in Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud. The Google Cloud Computing Foundations courses are for individuals with little to no background or experience in cloud computing. They provide an overview of concepts central to cloud basics, big data, and machine learning, and where and how Google Cloud fits in. By the end of the series of courses, learners will be able to articulate these concepts and demonstrate some hands-on skills.",
        certificateUrl: "https://www.cloudskillsboost.google/public_profiles/a39a2614-1e93-416c-85d9-b1a1667af555/badges/6559428",
        imageUrl: "https://cdn.qwiklabs.com/dUuOtMI%2Bxew%2Bz08cHAwdFpSla74i2jRsUyCCGjqCsqo%3D",
        icon: <SiGooglecloud className="w-6 h-6" />,
        category: "Google Cloud Foundations",
        skills: ["Google Cloud", "Data Analytics", "Machine Learning", "AI", "Cloud Computing"],
        color: "from-blue-400 to-cyan-500"
    },
    {
        title: "Google Cloud Computing Foundations: Cloud Computing Fundamentals - Locales",
        description: "This course, Google Cloud Computing Foundations: Cloud Computing Fundamentals - Locales, is intended for non-English learners. If you want to take this course in English, please enroll in Google Cloud Computing Foundations: Cloud Computing Fundamentals. The Google Cloud Computing Foundations courses are for individuals with little to no background or experience in cloud computing. They provide an overview of concepts central to cloud basics, big data, and machine learning, and where and how Google Cloud fits in. By the end of the series of courses, learners will be able to articulate these concepts and demonstrate some hands-on skills.",
        certificateUrl: "https://www.cloudskillsboost.google/public_profiles/a39a2614-1e93-416c-85d9-b1a1667af555/badges/6510918",
        imageUrl: "https://cdn.qwiklabs.com/7Y2k9azXsNrJqS%2Fe2NzqFVKSqsmPflWlAzls9bl7QAg%3D",
        icon: <FaCloud className="w-6 h-6" />,
        category: "Google Cloud Foundations",
        skills: ["Cloud Computing", "Google Cloud", "Cloud Fundamentals", "Big Data", "Machine Learning"],
        color: "from-sky-400 to-blue-500"
    },
    {
        title: "Google Cloud Computing Foundations: Networking & Security in Google Cloud - Locales",
        description: "This course, Google Cloud Computing Foundations: Networking & Security in Google Cloud - Locales, is intended for non-English learners. If you want to take this course in English, please enroll in Google Cloud Computing Foundations: Networking & Security in Google Cloud. The Google Cloud Computing Foundations courses are for individuals with little to no background or experience in cloud computing. They provide an overview of concepts central to cloud basics, big data, and machine learning, and where and how Google Cloud fits in. By the end of the series of courses, learners will be able to articulate these concepts and demonstrate some hands-on skills.",
        certificateUrl: "https://www.cloudskillsboost.google/public_profiles/a39a2614-1e93-416c-85d9-b1a1667af555/badges/6509286",
        imageUrl: "https://cdn.qwiklabs.com/R9d3mJ5qgmnmFC5z8tNCLi4cukjl3OMUmMmvZLvP5cI%3D",
        icon: <FaCloud className="w-6 h-6" />,
        category: "Google Cloud Foundations",
        skills: ["Networking", "Security", "Google Cloud", "Cloud Infrastructure", "Network Security"],
        color: "from-red-400 to-pink-500"
    },
    {
        title: "Google Cloud Computing Foundations: Infrastructure in Google Cloud - Locales",
        description: "This course, Google Cloud Computing Foundations: Infrastructure in Google Cloud - Locales, is intended for non-English learners. If you want to take this course in English, please enroll in Google Cloud Computing Foundations: Infrastructure in Google Cloud. The Google Cloud Computing Foundations courses are for individuals with little to no background or experience in cloud computing. They provide an overview of concepts central to cloud basics, big data, and machine learning, and where and how Google Cloud fits in. By the end of the series of courses, learners will be able to articulate these concepts and demonstrate some hands-on skills.",
        certificateUrl: "https://www.cloudskillsboost.google/public_profiles/a39a2614-1e93-416c-85d9-b1a1667af555/badges/6259716",
        imageUrl: "https://cdn.qwiklabs.com/KBM55i60HvsjEpmnNOFSwSbmgeNi1vEjNuFy9vRJBfI%3D",
        icon: <SiGooglecloud className="w-6 h-6" />,
        category: "Google Cloud Foundations",
        skills: ["Infrastructure", "Google Cloud", "Cloud Services", "Cloud Architecture", "Cloud Management"],
        color: "from-teal-400 to-green-500"
    }
]

function Google() {
    // Estados para las imágenes y certificaciones
    const [imageLoadingStates, setImageLoadingStates] = useState({})
    const [imageErrors, setImageErrors] = useState({})
    const [certifications, setCertifications] = useState([])

    // Generar UUIDs para las certificaciones al montar el componente
    useEffect(() => {
        const certificationsWithUUIDs = googleCertifications.map(cert => ({
            ...cert,
            id: uuidv4() // Asigna un UUID único a cada certificación
        }))
        setCertifications(certificationsWithUUIDs)

        // Inicializar estados de carga de imágenes
        const initialLoadingStates = {}
        certificationsWithUUIDs.forEach(cert => {
            initialLoadingStates[cert.id] = true
        })
        setImageLoadingStates(initialLoadingStates)
    }, []) // Array vacío asegura que se ejecute solo una vez al montar

    // Calcular estadísticas
    const googleStats = {
        totalCertificates: certifications.length,
        categories: [...new Set(certifications.map(cert => cert.category))].length,
        totalSkills: [...new Set(certifications.flatMap(cert => cert.skills))].length
    }

    // Función para abrir certificado
    const openCertificate = (url) => {
        window.open(url, '_blank')
    }

    // Función para manejar carga de imagen
    const handleImageLoad = (certId) => {
        setImageLoadingStates(prev => ({
            ...prev,
            [certId]: false
        }))
    }

    // Función para manejar error de imagen
    const handleImageError = (certId) => {
        setImageErrors(prev => ({
            ...prev,
            [certId]: true
        }))
        setImageLoadingStates(prev => ({
            ...prev,
            [certId]: false
        }))
    }

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
            {/* Gradientes decorativos estáticos */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
                <div className="max-w-6xl mx-auto">
                    {/* Encabezado de Google */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mb-6">
                            <FaGoogle className="w-12 h-12 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 tracking-tight">
                            Google
                        </h1>
                        <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mb-6"></div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-8 leading-relaxed max-w-4xl mx-auto">
                            Certificaciones en{' '}
                            <span className="text-green-400 font-medium">Inteligencia Artificial</span>,{' '}
                            <span className="text-blue-400 font-medium">Machine Learning</span> y{' '}
                            <span className="text-purple-400 font-medium">Cloud Computing</span>
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                            Formación especializada en las tecnologías más avanzadas de Google Cloud Platform,
                            con enfoque en inteligencia artificial generativa y desarrollo de modelos de deep learning.
                        </p>
                    </div>

                    {/* Estadísticas de Google */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <div className="text-center">
                            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
                                <div className="flex justify-center mb-4 text-green-400">
                                    <FaCertificate className="w-8 h-8" />
                                </div>
                                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                                    {googleStats.totalCertificates}
                                </div>
                                <div className="text-gray-400 text-sm lg:text-base">
                                    Certificaciones
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
                                <div className="flex justify-center mb-4 text-blue-400">
                                    <HiAcademicCap className="w-8 h-8" />
                                </div>
                                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                                    {googleStats.categories}
                                </div>
                                <div className="text-gray-400 text-sm lg:text-base">
                                    Categorías
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
                                <div className="flex justify-center mb-4 text-purple-400">
                                    <FaBrain className="w-8 h-8" />
                                </div>
                                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                                    {googleStats.totalSkills}
                                </div>
                                <div className="text-gray-400 text-sm lg:text-base">
                                    Habilidades
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Grid de certificaciones */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {certifications.map((cert, index) => (
                            <div
                                key={cert.id}
                                className="relative"
                            >
                                {/* Tarjeta de certificación */}
                                <div className="bg-gray-800/30 border border-gray-700 rounded-2xl overflow-hidden h-full">
                                    {/* Imagen de previsualización */}
                                    <div className="relative h-48 md:h-52 lg:h-56 bg-gray-700/50 overflow-hidden">
                                        {imageLoadingStates[cert.id] && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-gray-800/80 z-10">
                                                <div className="w-8 h-8 border-2 border-green-400 border-t-transparent rounded-full animate-spin"></div>
                                            </div>
                                        )}
                                        {imageErrors[cert.id] ? (
                                            <div className="absolute inset-0 flex items-center justify-center bg-gray-800/80 z-10">
                                                <div className="text-center">
                                                    <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                                                        {cert.icon}
                                                    </div>
                                                    <p className="text-gray-400 text-sm">Vista previa no disponible</p>
                                                </div>
                                            </div>
                                        ) : (
                                            <img
                                                src={cert.imageUrl}
                                                alt={cert.title}
                                                className="w-full h-full object-cover object-center"
                                                onLoad={() => handleImageLoad(cert.id)}
                                                onError={() => handleImageError(cert.id)}
                                                style={{
                                                    opacity: imageLoadingStates[cert.id] ? 0 : 1,
                                                    maxWidth: '100%',
                                                    height: 'auto',
                                                    minHeight: '100%'
                                                }}
                                                loading="eager"
                                                crossOrigin="anonymous"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                                        <div className="absolute top-4 right-4 flex items-center space-x-2">
                                            <span className="text-xs bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-full border border-white/20">
                                                {cert.category}
                                            </span>
                                            <div className="bg-black/60 backdrop-blur-sm rounded-full p-1 border border-white/20">
                                                <SiGooglecloud className="w-3 h-3 text-blue-400" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Contenido de la tarjeta */}
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${cert.color} rounded-xl`}>
                                                <div className="text-white">
                                                    {cert.icon}
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <FaAward className="w-4 h-4 text-yellow-400" />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                                            {cert.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                            {cert.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {cert.skills.map((skill, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full border border-gray-600"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex pt-4 border-t border-gray-700">
                                            <button
                                                onClick={() => openCertificate(cert.certificateUrl)}
                                                className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
                                            >
                                                <FaCertificate className="w-4 h-4" />
                                                Ver Certificado
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Elementos decorativos estáticos */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50"></div>
            <div className="absolute top-1/4 left-10 w-2 h-2 bg-green-400 rounded-full opacity-60"></div>
            <div className="absolute top-1/2 right-20 w-1 h-1 bg-blue-400 rounded-full opacity-40"></div>
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-50"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-green-400 rounded-full opacity-30"></div>
        </section>
    )
}

export default Google