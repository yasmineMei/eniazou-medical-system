import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";
import { Calendar1, CalendarDays, Clock, Eye, Printer } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

export const Route = createFileRoute("/_home/patient")({
  component: RouteComponent,
});

type Patient = {
  id: number;
  nom: string;
  prenom: string;
  birthDate: string;
  birthPlace: string;
  numberPhone: string;
  poids: string;
  taille: string;
  blood: string;
  dateEnregistrement: string;
  genre: string;
  dossierMedical: string;
  age: number;
};

function RouteComponent() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  // Données fictives pour les patients
  const patients: Patient[] = [
    {
      id: 1,
      nom: "Dupont",
      prenom: "Jean",
      birthDate: "5 Juin 1989",
      birthPlace: "Abidjan",
      numberPhone: "48 13 26 49",
      poids: "78",
      taille: "173",
      blood: "A-",
      dateEnregistrement: "2023-10-01",
      genre: "Homme",
      dossierMedical: "DM12345",
      age: 34,
    },
    {
      id: 2,
      nom: "Martin",
      prenom: "Marie",
      birthDate: "5 Juin 1989",
      birthPlace: "Yopougon",
      poids: "78",
      taille: "173",
      blood: "O+",
      numberPhone: "48 13 26 49",
      dateEnregistrement: "2023-09-15",
      genre: "Femme",
      dossierMedical: "DM67890",
      age: 28,
    },
    // Ajoutez d'autres patients ici
  ];

  // Filtrer les patients en fonction de la recherche
  const filteredPatients = patients.filter(
    (patient) =>
      patient.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.prenom.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Ouvrir le dialog avec les détails du patient
  const handleViewDetails = (patient: Patient) => {
    setSelectedPatient(patient);
    setIsDialogOpen(true);
  };

  // Cartes de statistiques
  const statsCards = [
    {
      title: "Patients journalier",
      value: "2",
      description: "Nombre total de patients aujourd'hui",
      icon: <Clock className="h-8 w-8 text-[#018a8cff]" />,
      bgColor: "from-green-50 to-green-100",
      textColor: "text-green-700",
    },
    {
      title: "Patients mensuel",
      value: "23",
      description: "Nombre total de patients ce mois-ci",
      icon: <Calendar1 className="h-8 w-8 text-[#018a8cff]" />,
      bgColor: "from-red-50 to-red-100",
      textColor: "text-red-700",
    },
    {
      title: "Patients annuel",
      value: "56",
      description: "Nombre total de patients cette année",
      icon: <CalendarDays className="h-8 w-8 text-[#018a8cff]" />,
      bgColor: "from-purple-50 to-purple-100",
      textColor: "text-purple-500",
    },
  ];

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <h1 className="text-2xl font-bold">Patients</h1>

      {/* Cartes de statistiques */}
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        {statsCards.map((card, index) => (
          <Card key={index} className={`bg-gradient-to-br ${card.bgColor}`}>
            <CardHeader className="items-center pb-0">
              {card.icon}
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
              <p className="text-center text-xl font-bold">{card.value}</p>
              <p className="text-center text-muted-foreground">
                {card.description}{" "}
                <span className={`${card.textColor} font-bold`}>
                  {card.value}
                </span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Barre de recherche */}
      <div className="mt-6">
        <Input
          type="text"
          placeholder="Rechercher un patient par nom ou prénom..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md"
        />
      </div>

      {/* Tableau des patients */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nom et Prénom</TableHead>
                <TableHead>Date d'enregistrement</TableHead>
                <TableHead>Genre</TableHead>
                <TableHead>Numéro de dossier</TableHead>
                <TableHead>Âge</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPatients.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell>
                    {patient.nom} {patient.prenom}
                  </TableCell>
                  <TableCell>{patient.dateEnregistrement}</TableCell>
                  <TableCell>{patient.genre}</TableCell>
                  <TableCell>{patient.dossierMedical}</TableCell>
                  <TableCell>{patient.age}</TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleViewDetails(patient)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button className="ml-2" variant="outline" size="sm">
                      <Printer className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Modal pour afficher les détails du patient */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>
              Dossier médical de {selectedPatient?.nom}{" "}
              {selectedPatient?.prenom}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            {/* Informations personnelles */}
            <div>
              <h2 className="text-lg font-bold text-[#018a8cff] mb-4">
                Informations personnelles
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p>
                    <strong>Nom:</strong> {selectedPatient?.nom}{" "}
                    {selectedPatient?.prenom}
                  </p>
                  <p>
                    <strong>Numéro de téléphone:</strong>{" "}
                    {selectedPatient?.numberPhone}
                  </p>
                  <p>
                    <strong>Genre:</strong> {selectedPatient?.genre}
                  </p>
                  <p>
                    <strong>Groupe Sanguin:</strong> {selectedPatient?.blood}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Date de naissance:</strong>{" "}
                    {selectedPatient?.birthDate}
                  </p>
                  <p>
                    <strong>Lieu de naissance:</strong>{" "}
                    {selectedPatient?.birthPlace}
                  </p>
                  <p>
                    <strong>Taille:</strong> {selectedPatient?.taille} cm
                  </p>
                  <p>
                    <strong>Poids:</strong> {selectedPatient?.poids} Kg
                  </p>
                </div>
              </div>
            </div>

            <DropdownMenuSeparator />

            {/* Historique médical */}
            <div>
              <h2 className="text-lg font-bold text-[#018a8cff] mb-4">
                Historique médical général
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p>Varicelle: </p>
                  <p>Hémorroïdes: </p>
                  <p>Hépatite B: </p>
                  <p>Allergies: </p>
                  <p>Chirurgies Antérieures: </p>
                  <p>Problèmes médicaux particuliers: </p>
                  <p>Médicaments à long terme: </p>
                </div>
                <div>
                  <p>Rougeole: </p>
                  <p>Drépanocytose: </p>
                  <p>Diabète: </p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
