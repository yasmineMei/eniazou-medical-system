import { createFileRoute } from "@tanstack/react-router";
import { Plus, Eye, Edit } from "lucide-react"; // Icônes
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export const Route = createFileRoute("/_home/personnel")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Gestion du modal d'ajout
  const [isViewModalOpen, setIsViewModalOpen] = useState(false); // Gestion du modal de visualisation
  const [selectedMember, setSelectedMember] = useState(null); // État pour le membre sélectionné
  const [name, setName] = useState(""); // État pour le nom
  const [email, setEmail] = useState(""); // État pour l'email
  const [role, setRole] = useState(""); // État pour le rôle
  const [password, setPassword] = useState(""); // État pour le mot de passe
  const [currentPage, setCurrentPage] = useState(1); // État pour la pagination
  const itemsPerPage = 10; // Nombre d'éléments par page

  // Données fictives pour le personnel
  const personnel = [
    {
      id: 1,
      name: "Kouakou Hélène",
      role: "Médecin",
      email: "jean.dupont@clinique.com",
      status: "inactif",
      photo: "/avatars/jean.jpg",
      medicalLicense: "12345",
      specialty: "Cardiologie",
      hireDate: "2023-01-15",
    },
    {
      id: 2,
      name: "Bamba Ivan",
      role: "Infirmier",
      email: "marie.curie@clinique.com",
      status: "active",
      photo: "/avatars/marie.jpg",
      nursingLicense: "67890",
      hireDate: "2023-05-20",
    },
    {
      id: 3,
      name: "Nebout Awé",
      role: "Réception",
      email: "paul.martin@clinique.com",
      status: "active",
      photo: "/avatars/paul.jpg",
      position: "Réceptionniste",
      hireDate: "2023-03-10",
    },
  ];

  // Gestion de la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajoutez ici la logique pour créer un nouveau membre
    console.log("Nouveau membre créé :", { name, email, role });
    setIsModalOpen(false); // Fermer le modal après soumission
  };

  // Ouvrir le modal de visualisation
  const handleView = (member) => {
    setSelectedMember(member);
    setIsViewModalOpen(true);
  };

  // Pagination
  const totalPages = Math.ceil(personnel.length / itemsPerPage);
  const currentData = personnel.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      {/* En-tête */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gestion du Personnel</h1>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#018a8cff] hover:bg-[#016a6cff]"
        >
          <Plus className="mr-2 h-4 w-4" /> Ajouter un membre
        </Button>
      </div>

      {/* Tableau du personnel */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nom</TableHead>
                <TableHead>Rôle</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentData.map((member) => (
                <TableRow key={member.id}>
                  <TableCell className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src={member.photo} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>{member.name}</span>
                  </TableCell>
                  <TableCell>{member.role}</TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell>
                    <span
                      className={
                        member.status === "active"
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {member.status === "active" ? "Actif" : "Inactif"}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleView(member)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(member.id)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Pagination */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            />
          </PaginationItem>
          <PaginationItem>
            <span>
              Page {currentPage} sur {totalPages}
            </span>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      {/* Modal pour ajouter un membre */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ajouter un membre du personnel</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* Informations générales */}
              <div>
                <Label>Nom et prénom</Label>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label>Mot de passe temporaire</Label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label>Rôle</Label>
                <Select value={role} onValueChange={(value) => setRole(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un rôle" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="doctor">Médecin</SelectItem>
                    <SelectItem value="nurse">Infirmier</SelectItem>
                    <SelectItem value="techlab">Laborantin</SelectItem>
                    <SelectItem value="reception">
                      Personnel Administratif
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Informations spécifiques au rôle */}
              {role === "doctor" && (
                <>
                  <div>
                    <Label>Numéro de licence médicale</Label>
                    <Input type="text" required />
                  </div>
                  <div>
                    <Label>Spécialité</Label>
                    <Input type="text" required />
                  </div>
                  <div>
                    <Label>Date d'embauche</Label>
                    <Input type="date" required />
                  </div>
                </>
              )}
              {role === "nurse" && (
                <>
                  <div>
                    <Label>Numéro de licence infirmière</Label>
                    <Input type="text" required />
                  </div>
                  <div>
                    <Label>Date d'embauche</Label>
                    <Input type="date" required />
                  </div>
                </>
              )}
              {role === "techlab" && (
                <>
                  <div>
                    <Label>Numéro de licence</Label>
                    <Input type="text" required />
                  </div>
                  <div>
                    <Label>Date d'embauche</Label>
                    <Input type="date" required />
                  </div>
                </>
              )}
              {role === "reception" && (
                <>
                  <div>
                    <Label>Poste</Label>
                    <Input type="text" required />
                  </div>
                  <div>
                    <Label>Date d'embauche</Label>
                    <Input type="date" required />
                  </div>
                </>
              )}
            </div>
            <DialogFooter className="mt-2">
              <Button
                type="submit"
                className="bg-[#018a8cff] hover:bg-[#016a6cff]"
              >
                Créer
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Modal pour afficher les informations du personnel */}
      <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Informations du personnel</DialogTitle>
          </DialogHeader>
          {selectedMember && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage
                    src={selectedMember.photo}
                    alt={selectedMember.name}
                  />
                  <AvatarFallback>
                    {selectedMember.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-xl font-bold">{selectedMember.name}</h2>
                  <p className="text-sm text-gray-600">{selectedMember.role}</p>
                </div>
              </div>
              <div>
                <Label>Email</Label>
                <p>{selectedMember.email}</p>
              </div>
              <div>
                <Label>Statut</Label>
                <p
                  className={
                    selectedMember.status === "active"
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {selectedMember.status === "active" ? "Actif" : "Inactif"}
                </p>
              </div>
              {/* Informations spécifiques au rôle */}
              {selectedMember.role === "Médecin" && (
                <>
                  <div>
                    <Label>Numéro de licence médicale</Label>
                    <p>{selectedMember.medicalLicense}</p>
                  </div>
                  <div>
                    <Label>Spécialité</Label>
                    <p>{selectedMember.specialty}</p>
                  </div>
                  <div>
                    <Label>Date d'embauche</Label>
                    <p>{selectedMember.hireDate}</p>
                  </div>
                </>
              )}
              {selectedMember.role === "Infirmier" && (
                <>
                  <div>
                    <Label>Numéro de licence infirmière</Label>
                    <p>{selectedMember.nursingLicense}</p>
                  </div>
                  <div>
                    <Label>Date d'embauche</Label>
                    <p>{selectedMember.hireDate}</p>
                  </div>
                </>
              )}
              {selectedMember.role === "Réception" && (
                <>
                  <div>
                    <Label>Poste</Label>
                    <p>{selectedMember.position}</p>
                  </div>
                  <div>
                    <Label>Date d'embauche</Label>
                    <p>{selectedMember.hireDate}</p>
                  </div>
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
