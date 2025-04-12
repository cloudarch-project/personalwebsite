export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white font-sans">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <header className="mb-16">
          <h1 className="text-5xl font-bold mb-4">Olivia Rossi</h1>
          <p className="text-xl text-gray-300">Cloud Engineer | AWS | Terraform | DevOps</p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Chi sono</h2>
          <p className="text-gray-400 leading-relaxed">
            Sono una Cloud Engineer con esperienza in architetture AWS, sviluppo infrastrutturale con Terraform,
            automazione CI/CD e Kubernetes. Appassionata di soluzioni scalabili, eleganti e moderne.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Competenze</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>AWS (EC2, S3, VPC, Lambda, IAM)</li>
            <li>Terraform & CloudFormation</li>
            <li>Docker & Kubernetes (EKS)</li>
            <li>CI/CD: GitHub Actions, GitLab CI</li>
            <li>Monitoraggio: CloudWatch, Prometheus, Grafana</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Esperienza</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">Senior Cloud Engineer - XYZ Tech</h3>
              <p className="text-gray-400">2022 - Oggi</p>
              <p className="text-gray-400">Progettazione e gestione di architetture AWS scalabili, sviluppo di pipeline CI/CD e supporto all'automazione infrastrutturale.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">DevOps Specialist - ABC Solutions</h3>
              <p className="text-gray-400">2019 - 2022</p>
              <p className="text-gray-400">Integrazione e gestione di Kubernetes, creazione di ambienti test e produzione, configurazione strumenti di monitoring.</p>
            </div>
          </div>
        </section>

        <footer className="mt-20 text-center text-gray-500">
          <p>&copy; 2025 Olivia Rossi — <a href="mailto:olivia@example.com" className="underline">olivia@example.com</a></p>
        </footer>
      </div>
    </main>
  );
}
