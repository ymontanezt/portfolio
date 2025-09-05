"use client"

import { structuredData } from "@/lib/seo"

interface StructuredDataProps {
  type: "person" | "website" | "portfolio"
  data?: any
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  let jsonLd = structuredData[type]
  
  // Combinar con data personalizada si se proporciona
  if (data) {
    jsonLd = { ...jsonLd, ...data }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd, null, 2)
      }}
    />
  )
}

export default StructuredData
