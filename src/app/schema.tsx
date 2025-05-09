export default function SchemaMarkup() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Dr. Milan Mangeshkar - Biostatistics Consulting',
    description: 'Expert biostatistics consulting services specializing in clinical trials, data analysis, and regulatory submissions.',
    url: 'https://tanimajoshi.github.io/biostat-consulting',
    provider: {
      '@type': 'Person',
      name: 'Dr. Milan Mangeshkar',
      jobTitle: 'Biostatistics Consultant',
      description: 'Experienced biostatistician with over 20 years in clinical trials and regulatory submissions.',
      sameAs: [
        'https://www.linkedin.com/in/milan-mangeshkar/',  // Update with actual LinkedIn URL
      ],
    },
    areaServed: 'Worldwide',
    serviceType: [
      'Biostatistics Consulting',
      'Clinical Trial Design',
      'Statistical Analysis',
      'FDA Submissions',
      'Medical Research Statistics',
    ],
    knowsAbout: [
      'Biostatistics',
      'Clinical Trials',
      'Statistical Analysis',
      'FDA Regulatory Requirements',
      'Medical Research',
      'Data Analysis',
      'SAS Programming',
      'R Programming',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
} 