import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";
import { Calendar1, CalendarDays, Clock, Eye } from "lucide-react";
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

export const Route = createFileRoute("/_home/patient")({
  component: RouteComponent,
});

function RouteComponent() {
  const [searchQuery, setSearchQuery] = useState(""); // État pour la barre de recherche
  const [selectedPatient, setSelectedPatient] = useState(null); // État pour le patient sélectionné
  const [isDialogOpen, setIsDialogOpen] = useState(false); // État pour le dialog

  // Données fictives pour les patients
  const patients = [
    {
      id: 1,
      nom: "Dupont",
      prenom: "Jean",
      dateEnregistrement: "2023-10-01",
      genre: "Homme",
      dossierMedical: "DM12345",
      age: 34,
    },
    {
      id: 2,
      nom: "Martin",
      prenom: "Marie",
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
  const handleViewDetails = (patient) => {
    setSelectedPatient(patient);
    setIsDialogOpen(true);
  };

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <h1 className="text-2xl font-bold">Patients</h1>

      {/* Cartes de statistiques */}
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <Card className="bg-gradient-to-br from-green-50 to-green-100">
          <CardHeader className="items-center pb-0">
            <Clock className="h-8 w-8 text-[#018a8cff]" />
            <CardTitle>Patients journalier</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <p className="text-center text-xl font-bold">2</p>
            <p className="text-center text-muted-foreground">
              Nombre total de patients{" "}
              <span className="text-green-700 font-bold">2</span> aujourd'hui
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-red-50 to-red-100">
          <CardHeader className="items-center pb-0">
            <Calendar1 className="h-8 w-8 text-[#018a8cff]" />
            <CardTitle>Patients mensuel</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <p className="text-center text-xl font-bold">23</p>
            <p className="text-center text-muted-foreground">
              Nombre total de patients{" "}
              <span className="text-red-700 font-bold">23</span> aujourd'hui
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
          <CardHeader className="items-center pb-0">
            <CalendarDays className="h-8 w-8 text-[#018a8cff]" />
            <CardTitle>Patients annuel</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <p className="text-center text-xl font-bold">56</p>
            <p className="text-center text-muted-foreground">
              Nombre total de patients{" "}
              <span className="text-purple-500 font-bold">56</span> aujourd'hui
            </p>
          </CardContent>
        </Card>
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
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Dialog pour afficher les détails du patient */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>
              Dossier médical de {selectedPatient?.nom}{" "}
              {selectedPatient?.prenom}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {/* Informations personnelles */}
            <div>
              <h2 className="text-lg font-bold">Informations personnelles</h2>
              <p>Nom: {selectedPatient?.nom}</p>
              <p>Prénom: {selectedPatient?.prenom}</p>
              <p>Genre: {selectedPatient?.genre}</p>
              <p>Âge: {selectedPatient?.age}</p>
              <p>
                Date d'enregistrement: {selectedPatient?.dateEnregistrement}
              </p>
              <p>Numéro de dossier: {selectedPatient?.dossierMedical}</p>
            </div>

            {/* Antécedents */}
            <div>
              <h2 className="text-lg font-bold">Antécédents médicaux</h2>
              <p>Aucun antécedents enregistré.</p>
            </div>

            {/* Traitements */}
            <div>
              <h2 className="text-lg font-bold">Traitements</h2>
              <p>Aucun traitement enregistré.</p>
            </div>

            {/* Analyses */}
            <div>
              <h2 className="text-lg font-bold">Analyses médicales</h2>
              <p>Aucune analyse enregistrée.</p>
            </div>

            {/* Examens */}
            <div>
              <h2 className="text-lg font-bold">Examens médicales</h2>
              <p>Aucun examen enregistré.</p>
            </div>

            {/* Rendez-vous */}
            <div>
              <h2 className="text-lg font-bold">Rendez-vous</h2>
              <p>Aucun rendez-vous enregistré.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
