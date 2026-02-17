import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  GraduationCap,
  Users,
  Calendar,
  Plus,
  Edit,
  Clock,
  TrendingUp,
  CheckCircle2,
  XCircle,
  User,
  Phone,
  Mail,
  Award,
  DollarSign,
  UserPlus,
  CreditCard,
  AlertCircle,
  Download,
  CalendarCheck,
  UserCheck,
  UserX,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Checkbox } from "./ui/checkbox";
import { format } from "date-fns";
import { Calendar as CalendarComponent } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const coaches = [
  {
    id: 1,
    name: "Coach Vikram Sharma",
    sport: "Badminton",
    experience: 8,
    certifications: ["BWF Level 2", "Sports Science Diploma"],
    skillLevels: ["Beginner", "Intermediate", "Advanced"],
    trainingModes: ["Offline", "Online"],
    phone: "+91 98765 43210",
    email: "vikram@sportstik.com",
    avatar: null,
    rating: 4.8,
    totalSessions: 245,
    activeBatches: 3,
    pricePerSession: 800,
    availability: "Mon, Wed, Fri - 5:00 PM - 8:00 PM",
  },
  {
    id: 2,
    name: "Coach Anita Desai",
    sport: "Tennis",
    experience: 12,
    certifications: ["ITF Level 3", "USPTA Certified"],
    skillLevels: ["Intermediate", "Advanced"],
    trainingModes: ["Offline"],
    phone: "+91 98765 43211",
    email: "anita@sportstik.com",
    avatar: null,
    rating: 4.9,
    totalSessions: 412,
    activeBatches: 2,
    pricePerSession: 1200,
    availability: "Tue, Thu, Sat - 6:00 AM - 9:00 AM",
  },
  {
    id: 3,
    name: "Coach Rajesh Kumar",
    sport: "Basketball",
    experience: 6,
    certifications: ["FIBA Level 1", "Strength Training"],
    skillLevels: ["Beginner", "Intermediate"],
    trainingModes: ["Offline", "Online"],
    phone: "+91 98765 43212",
    email: "rajesh@sportstik.com",
    avatar: null,
    rating: 4.7,
    totalSessions: 189,
    activeBatches: 4,
    pricePerSession: 1000,
    availability: "Daily - 6:00 PM - 9:00 PM",
  },
];

const batches = [
  {
    id: 1,
    name: "Advanced Badminton Batch",
    coach: "Coach Vikram Sharma",
    sport: "Badminton",
    type: "Group Training",
    skillLevel: "Advanced",
    schedule: "Mon, Wed, Fri - 6:00 PM",
    duration: "1.5 hours",
    students: 8,
    maxCapacity: 10,
    pricePerMonth: 6000,
    startDate: "2026-02-01",
    status: "active",
  },
  {
    id: 2,
    name: "Beginner Tennis Program",
    coach: "Coach Anita Desai",
    sport: "Tennis",
    type: "Group Training",
    skillLevel: "Beginner",
    schedule: "Tue, Thu, Sat - 7:00 AM",
    duration: "2 hours",
    students: 6,
    maxCapacity: 8,
    pricePerMonth: 8000,
    startDate: "2026-02-15",
    status: "active",
  },
  {
    id: 3,
    name: "Basketball Academy",
    coach: "Coach Rajesh Kumar",
    sport: "Basketball",
    type: "Academy Batch",
    skillLevel: "Intermediate",
    schedule: "Daily - 6:00 PM",
    duration: "2 hours",
    students: 12,
    maxCapacity: 15,
    pricePerMonth: 5000,
    startDate: "2026-01-10",
    status: "active",
  },
  {
    id: 4,
    name: "Personal Badminton Training",
    coach: "Coach Vikram Sharma",
    sport: "Badminton",
    type: "Personal (1:1)",
    skillLevel: "Advanced",
    schedule: "Mon, Wed - 8:00 PM",
    duration: "1 hour",
    students: 1,
    maxCapacity: 1,
    pricePerMonth: 12000,
    startDate: "2026-02-10",
    status: "active",
  },
];

const sessions = [
  {
    id: 1,
    batchName: "Advanced Badminton Batch",
    coach: "Coach Vikram Sharma",
    date: "2026-02-17",
    time: "06:00 PM - 07:30 PM",
    studentsPresent: 7,
    totalStudents: 8,
    status: "scheduled",
    court: "Court 1",
  },
  {
    id: 2,
    batchName: "Beginner Tennis Program",
    coach: "Coach Anita Desai",
    date: "2026-02-17",
    time: "07:00 AM - 09:00 AM",
    studentsPresent: 6,
    totalStudents: 6,
    status: "completed",
    court: "Court 3",
  },
  {
    id: 3,
    batchName: "Basketball Academy",
    coach: "Coach Rajesh Kumar",
    date: "2026-02-17",
    time: "06:00 PM - 08:00 PM",
    studentsPresent: 12,
    totalStudents: 12,
    status: "ongoing",
    court: "Court 4",
  },
];

const mockStudents = [
  {
    id: 1,
    name: "Arjun Verma",
    age: 16,
    phone: "+91 98765 11111",
    email: "arjun@email.com",
    parentName: "Mr. Rajesh Verma",
    parentPhone: "+91 98765 22222",
    skillLevel: "Advanced",
    joinDate: "2026-01-15",
    status: "active",
    batchId: 1,
    batchName: "Advanced Badminton Batch",
    monthlyFee: 6000,
    paymentStatus: "paid",
    lastPaymentDate: "2026-02-01",
    nextDueDate: "2026-03-01",
  },
  {
    id: 2,
    name: "Priya Sharma",
    age: 14,
    phone: "+91 98765 33333",
    email: "priya@email.com",
    parentName: "Mrs. Sunita Sharma",
    parentPhone: "+91 98765 44444",
    skillLevel: "Intermediate",
    joinDate: "2026-02-01",
    status: "active",
    batchId: 2,
    batchName: "Beginner Tennis Program",
    monthlyFee: 8000,
    paymentStatus: "pending",
    lastPaymentDate: "2026-02-01",
    nextDueDate: "2026-02-17",
  },
  {
    id: 3,
    name: "Rohan Patel",
    age: 15,
    phone: "+91 98765 55555",
    email: "rohan@email.com",
    parentName: "Mr. Amit Patel",
    parentPhone: "+91 98765 66666",
    skillLevel: "Beginner",
    joinDate: "2026-01-20",
    status: "active",
    batchId: 3,
    batchName: "Basketball Academy",
    monthlyFee: 5000,
    paymentStatus: "overdue",
    lastPaymentDate: "2026-01-20",
    nextDueDate: "2026-02-10",
  },
  {
    id: 4,
    name: "Kavya Singh",
    age: 17,
    phone: "+91 98765 77777",
    email: "kavya@email.com",
    parentName: "Mrs. Meera Singh",
    parentPhone: "+91 98765 88888",
    skillLevel: "Advanced",
    joinDate: "2026-02-10",
    status: "active",
    batchId: 4,
    batchName: "Personal Badminton Training",
    monthlyFee: 12000,
    paymentStatus: "paid",
    lastPaymentDate: "2026-02-10",
    nextDueDate: "2026-03-10",
  },
  {
    id: 5,
    name: "Aarav Gupta",
    age: 16,
    phone: "+91 98765 99999",
    email: "aarav@email.com",
    parentName: "Mr. Sanjay Gupta",
    parentPhone: "+91 98765 00000",
    skillLevel: "Advanced",
    joinDate: "2026-01-15",
    status: "active",
    batchId: 1,
    batchName: "Advanced Badminton Batch",
    monthlyFee: 6000,
    paymentStatus: "pending",
    lastPaymentDate: "2026-01-15",
    nextDueDate: "2026-02-20",
  },
];

const paymentHistory = [
  {
    id: 1,
    studentId: 1,
    studentName: "Arjun Verma",
    batchName: "Advanced Badminton Batch",
    amount: 6000,
    date: "2026-02-01",
    method: "UPI",
    transactionId: "TXN123456789",
    status: "completed",
    month: "February 2026",
  },
  {
    id: 2,
    studentId: 4,
    studentName: "Kavya Singh",
    batchName: "Personal Badminton Training",
    amount: 12000,
    date: "2026-02-10",
    method: "Cash",
    transactionId: "CASH0012",
    status: "completed",
    month: "February 2026",
  },
  {
    id: 3,
    studentId: 1,
    studentName: "Arjun Verma",
    batchName: "Advanced Badminton Batch",
    amount: 6000,
    date: "2026-01-01",
    method: "Bank Transfer",
    transactionId: "TXN987654321",
    status: "completed",
    month: "January 2026",
  },
];

const attendanceRecords = [
  {
    id: 1,
    studentId: 1,
    studentName: "Arjun Verma",
    batchId: 1,
    date: "2026-02-17",
    status: "present",
  },
  {
    id: 2,
    studentId: 5,
    studentName: "Aarav Gupta",
    batchId: 1,
    date: "2026-02-17",
    status: "present",
  },
  {
    id: 3,
    studentId: 1,
    studentName: "Arjun Verma",
    batchId: 1,
    date: "2026-02-15",
    status: "present",
  },
  {
    id: 4,
    studentId: 5,
    studentName: "Aarav Gupta",
    batchId: 1,
    date: "2026-02-15",
    status: "absent",
  },
  {
    id: 5,
    studentId: 1,
    studentName: "Arjun Verma",
    batchId: 1,
    date: "2026-02-14",
    status: "present",
  },
  {
    id: 6,
    studentId: 5,
    studentName: "Aarav Gupta",
    batchId: 1,
    date: "2026-02-14",
    status: "late",
  },
  {
    id: 7,
    studentId: 2,
    studentName: "Priya Sharma",
    batchId: 2,
    date: "2026-02-17",
    status: "present",
  },
  {
    id: 8,
    studentId: 3,
    studentName: "Rohan Patel",
    batchId: 3,
    date: "2026-02-17",
    status: "present",
  },
];

export function CoachingModule() {
  const [activeTab, setActiveTab] = useState<"coaches" | "batches" | "sessions" | "payments">("coaches");
  const [studentsDialogOpen, setStudentsDialogOpen] = useState(false);
  const [addStudentOpen, setAddStudentOpen] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState<typeof batches[0] | null>(null);
  const [collectPaymentOpen, setCollectPaymentOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<typeof mockStudents[0] | null>(null);
  const [paymentFilter, setPaymentFilter] = useState<string>("all");
  const [attendanceDialogOpen, setAttendanceDialogOpen] = useState(false);
  const [attendanceDate, setAttendanceDate] = useState<Date>(new Date());
  const [attendanceView, setAttendanceView] = useState<"mark" | "history">("mark");
  const [studentAttendance, setStudentAttendance] = useState<{[key: number]: "present" | "absent" | "late"}>({});
  const [addCoachOpen, setAddCoachOpen] = useState(false);
  const [createBatchOpen, setCreateBatchOpen] = useState(false);
  const [endBatchOpen, setEndBatchOpen] = useState(false);
  const [selectedBatchToEnd, setSelectedBatchToEnd] = useState<typeof batches[0] | null>(null);

  const totalCoaches = coaches.length;
  const totalBatches = batches.filter((b) => b.status === "active").length;
  const totalStudents = batches.reduce((sum, b) => sum + b.students, 0);
  const todaySessions = sessions.length;

  const pendingPayments = mockStudents.filter(s => s.paymentStatus === "pending" || s.paymentStatus === "overdue");
  const totalPendingAmount = pendingPayments.reduce((sum, s) => sum + s.monthlyFee, 0);
  const overduePayments = mockStudents.filter(s => s.paymentStatus === "overdue").length;
  const thisMonthCollected = paymentHistory
    .filter(p => p.month === "February 2026")
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold">Coaching & Academy</h1>
          <p className="text-muted-foreground mt-1">Manage coaches, batches, and training sessions</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="gap-2" onClick={() => setAddCoachOpen(true)}>
            <Plus className="w-4 h-4" />
            Add Coach
          </Button>
          <Button className="gap-2" onClick={() => setCreateBatchOpen(true)}>
            <Plus className="w-4 h-4" />
            Create Batch
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-50 rounded-lg">
                <GraduationCap className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold">{totalCoaches}</p>
                <p className="text-sm text-muted-foreground">Total Coaches</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold">{totalBatches}</p>
                <p className="text-sm text-muted-foreground">Active Batches</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-50 rounded-lg">
                <User className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold">{totalStudents}</p>
                <p className="text-sm text-muted-foreground">Total Students</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-orange-50 rounded-lg">
                <Calendar className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold">{todaySessions}</p>
                <p className="text-sm text-muted-foreground">Today's Sessions</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)}>
        <TabsList className="grid w-full grid-cols-4 lg:w-auto">
          <TabsTrigger value="coaches">Coaches</TabsTrigger>
          <TabsTrigger value="batches">Batches</TabsTrigger>
          <TabsTrigger value="sessions">Sessions</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
        </TabsList>

        {/* Coaches Tab */}
        <TabsContent value="coaches" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {coaches.map((coach) => (
              <Card key={coach.id}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={coach.avatar || undefined} />
                      <AvatarFallback className="bg-emerald-100 text-emerald-700 text-lg">
                        {coach.name
                          .split(" ")
                          .slice(1, 3)
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{coach.name}</CardTitle>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline">{coach.sport}</Badge>
                        <div className="flex items-center gap-1 text-sm">
                          <Award className="w-4 h-4 text-yellow-500" />
                          <span className="font-medium">{coach.rating}</span>
                        </div>
                      </div>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>Edit Coach Profile</DialogTitle>
                          <DialogDescription>Update coach information and settings</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2 col-span-2">
                              <Label>Full Name</Label>
                              <Input defaultValue={coach.name} />
                            </div>
                            <div className="space-y-2">
                              <Label>Phone</Label>
                              <Input defaultValue={coach.phone} />
                            </div>
                            <div className="space-y-2">
                              <Label>Email</Label>
                              <Input defaultValue={coach.email} />
                            </div>
                            <div className="space-y-2">
                              <Label>Sport</Label>
                              <Input defaultValue={coach.sport} />
                            </div>
                            <div className="space-y-2">
                              <Label>Experience (years)</Label>
                              <Input type="number" defaultValue={coach.experience} />
                            </div>
                            <div className="space-y-2">
                              <Label>Price per Session</Label>
                              <Input type="number" defaultValue={coach.pricePerSession} />
                            </div>
                            <div className="space-y-2">
                              <Label>Availability</Label>
                              <Input defaultValue={coach.availability} />
                            </div>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="outline">Cancel</Button>
                          <Button>Save Changes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Experience</p>
                      <p className="font-medium">{coach.experience} years</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Active Batches</p>
                      <p className="font-medium">{coach.activeBatches}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Total Sessions</p>
                      <p className="font-medium">{coach.totalSessions}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Price/Session</p>
                      <p className="font-medium">₹{coach.pricePerSession}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Certifications</p>
                    <div className="flex flex-wrap gap-1">
                      {coach.certifications.map((cert) => (
                        <Badge key={cert} variant="secondary" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Training Modes</p>
                    <div className="flex gap-1">
                      {coach.trainingModes.map((mode) => (
                        <Badge key={mode} variant="outline" className="text-xs">
                          {mode}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{coach.availability}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 gap-2" size="sm">
                      <Phone className="w-4 h-4" />
                      Contact
                    </Button>
                    <Button variant="outline" className="flex-1 gap-2" size="sm">
                      <Calendar className="w-4 h-4" />
                      Schedule
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Batches Tab */}
        <TabsContent value="batches" className="mt-6">
          <div className="space-y-4">
            {batches.map((batch) => (
              <Card key={batch.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{batch.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{batch.coach}</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="outline">{batch.sport}</Badge>
                          <Badge
                            variant={batch.status === "active" ? "default" : "secondary"}
                            className="bg-emerald-600"
                          >
                            {batch.status}
                          </Badge>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Type</p>
                          <p className="font-medium">{batch.type}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Skill Level</p>
                          <p className="font-medium">{batch.skillLevel}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Duration</p>
                          <p className="font-medium">{batch.duration}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Schedule</p>
                          <p className="font-medium">{batch.schedule}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-6 pt-2 border-t">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">
                            <span className="font-semibold">{batch.students}</span>
                            <span className="text-muted-foreground">/{batch.maxCapacity} students</span>
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">
                            <span className="font-semibold">₹{batch.pricePerMonth}</span>
                            <span className="text-muted-foreground">/month</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex lg:flex-col gap-2">
                      <Button
                        variant="outline"
                        className="gap-2"
                        size="sm"
                        onClick={() => {
                          setSelectedBatch(batch);
                          setStudentsDialogOpen(true);
                        }}
                      >
                        <Users className="w-4 h-4" />
                        Students
                      </Button>
                      <Button 
                        variant="outline" 
                        className="gap-2" 
                        size="sm"
                        onClick={() => {
                          setSelectedBatch(batch);
                          setAttendanceDialogOpen(true);
                        }}
                      >
                        <Calendar className="w-4 h-4" />
                        Attendance
                      </Button>
                      <Button 
                        variant="outline" 
                        className="gap-2 text-red-600 hover:text-red-700" 
                        size="sm"
                        onClick={() => {
                          setSelectedBatchToEnd(batch);
                          setEndBatchOpen(true);
                        }}
                      >
                        <XCircle className="w-4 h-4" />
                        End Batch
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Sessions Tab */}
        <TabsContent value="sessions" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Today's Sessions</CardTitle>
                <Button variant="outline" size="sm" className="gap-2">
                  <Calendar className="w-4 h-4" />
                  Change Date
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sessions.map((session) => (
                  <div
                    key={session.id}
                    className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold">{session.batchName}</h4>
                          <Badge
                            variant={
                              session.status === "completed"
                                ? "default"
                                : session.status === "ongoing"
                                ? "secondary"
                                : "outline"
                            }
                            className={
                              session.status === "ongoing"
                                ? "bg-emerald-600"
                                : session.status === "completed"
                                ? "bg-blue-600"
                                : ""
                            }
                          >
                            {session.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{session.coach}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            <span>{session.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-muted-foreground" />
                            <span>
                              {session.studentsPresent}/{session.totalStudents} present
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span>{session.court}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {session.status === "completed" ? (
                              <CheckCircle2 className="w-4 h-4 text-green-600" />
                            ) : (
                              <Clock className="w-4 h-4 text-orange-600" />
                            )}
                            <span>{session.status}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {session.status === "scheduled" && (
                          <Button variant="outline" size="sm">
                            Start Session
                          </Button>
                        )}
                        {session.status === "ongoing" && (
                          <Button size="sm">Mark Attendance</Button>
                        )}
                        {session.status === "completed" && (
                          <Button variant="outline" size="sm">
                            View Report
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payments Tab */}
        <TabsContent value="payments" className="mt-6">
          <div className="space-y-6">
            {/* Payment Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <DollarSign className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-semibold">₹{thisMonthCollected.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground">Collected This Month</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-orange-50 rounded-lg">
                      <AlertCircle className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-semibold">₹{totalPendingAmount.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground">Pending Payments</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-red-50 rounded-lg">
                      <XCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-semibold">{overduePayments}</p>
                      <p className="text-sm text-muted-foreground">Overdue Payments</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Payment Filters and List */}
            <Card>
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <CardTitle>Student Payments</CardTitle>
                  <div className="flex gap-2">
                    <Select value={paymentFilter} onValueChange={setPaymentFilter}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Students</SelectItem>
                        <SelectItem value="paid">Paid</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="overdue">Overdue</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" className="gap-2" size="sm">
                      <Download className="w-4 h-4" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {mockStudents
                    .filter(s => 
                      paymentFilter === "all" || 
                      (paymentFilter === "paid" && s.paymentStatus === "paid") ||
                      (paymentFilter === "pending" && s.paymentStatus === "pending") || 
                      (paymentFilter === "overdue" && s.paymentStatus === "overdue")
                    )
                    .map((student) => (
                      <div key={student.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                          <div className="flex items-center gap-4 flex-1">
                            <Avatar className="w-12 h-12">
                              <AvatarFallback className="bg-blue-100 text-blue-700">
                                {student.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <p className="font-semibold">{student.name}</p>
                                <Badge 
                                  variant={
                                    student.paymentStatus === "paid" 
                                      ? "default" 
                                      : student.paymentStatus === "overdue" 
                                      ? "destructive" 
                                      : "secondary"
                                  }
                                  className={student.paymentStatus === "paid" ? "bg-green-600" : ""}
                                >
                                  {student.paymentStatus}
                                </Badge>
                              </div>
                              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-1 text-sm text-muted-foreground">
                                <span>{student.batchName}</span>
                                <span className="hidden sm:inline">•</span>
                                <span>{student.phone}</span>
                                <span className="hidden sm:inline">•</span>
                                <span>Due: {student.nextDueDate}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="text-right">
                              <p className="text-lg font-semibold">₹{student.monthlyFee.toLocaleString()}</p>
                              <p className="text-sm text-muted-foreground">Monthly Fee</p>
                            </div>
                            <Button
                              variant={student.paymentStatus === "paid" ? "outline" : "default"}
                              size="sm"
                              className="gap-2"
                              onClick={() => {
                                setSelectedStudent(student);
                                setCollectPaymentOpen(true);
                              }}
                              disabled={student.paymentStatus === "paid"}
                            >
                              <CreditCard className="w-4 h-4" />
                              {student.paymentStatus === "paid" ? "View" : "Collect"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            {/* Payment History */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {paymentHistory.map((payment) => (
                    <div key={payment.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="p-2 bg-green-50 rounded-lg">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{payment.studentName}</p>
                          <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                            <span>{payment.batchName}</span>
                            <span>•</span>
                            <span>{payment.date}</span>
                            <span>•</span>
                            <span>{payment.method}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">₹{payment.amount.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">{payment.transactionId}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Students Dialog */}
      <Dialog open={studentsDialogOpen} onOpenChange={setStudentsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Batch Students</DialogTitle>
            <DialogDescription>Manage students in the batch</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            {selectedBatch && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{selectedBatch.sport}</Badge>
                  <Badge
                    variant={selectedBatch.status === "active" ? "default" : "secondary"}
                    className="bg-emerald-600"
                  >
                    {selectedBatch.status}
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  className="gap-2"
                  size="sm"
                  onClick={() => setAddStudentOpen(true)}
                >
                  <UserPlus className="w-4 h-4" />
                  Add Student
                </Button>
              </div>
            )}
            <div className="space-y-2">
              {mockStudents.map((student) => (
                <div key={student.id} className="p-4 border rounded-lg hover:bg-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-blue-100 text-blue-700 text-sm">
                        {student.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium">{student.name}</p>
                      <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                        <span>{student.age} years</span>
                        <span>•</span>
                        <span>{student.skillLevel}</span>
                        <span>•</span>
                        <span>{student.phone}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Badge variant="outline">{student.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline">Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Student Dialog */}
      <Dialog open={addStudentOpen} onOpenChange={setAddStudentOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Add Student</DialogTitle>
            <DialogDescription>Enter student details</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Full Name</Label>
                <Input />
              </div>
              <div className="space-y-2">
                <Label>Age</Label>
                <Input type="number" />
              </div>
              <div className="space-y-2">
                <Label>Phone</Label>
                <Input />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input />
              </div>
              <div className="space-y-2">
                <Label>Parent Name</Label>
                <Input />
              </div>
              <div className="space-y-2">
                <Label>Parent Phone</Label>
                <Input />
              </div>
              <div className="space-y-2">
                <Label>Skill Level</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select skill level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Join Date</Label>
                <Input type="date" />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button>Add Student</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Collect Payment Dialog */}
      <Dialog open={collectPaymentOpen} onOpenChange={setCollectPaymentOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Collect Payment</DialogTitle>
            <DialogDescription>Enter payment details</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            {selectedStudent && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{selectedStudent.batchName}</Badge>
                  <Badge
                    variant="default"
                    className="bg-emerald-600"
                  >
                    {selectedStudent.monthlyFee} due
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  className="gap-2"
                  size="sm"
                >
                  <CreditCard className="w-4 h-4" />
                  Pay
                </Button>
              </div>
            )}
            <div className="space-y-2">
              <div className="space-y-2">
                <Label>Payment Method</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="upi">UPI</SelectItem>
                    <SelectItem value="cash">Cash</SelectItem>
                    <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Transaction ID</Label>
                <Input />
              </div>
              <div className="space-y-2">
                <Label>Payment Date</Label>
                <Input type="date" />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button>Collect Payment</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Attendance Dialog */}
      <Dialog open={attendanceDialogOpen} onOpenChange={setAttendanceDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Attendance Management</DialogTitle>
            <DialogDescription>
              {selectedBatch ? `${selectedBatch.name} - ${selectedBatch.coach}` : "Manage batch attendance"}
            </DialogDescription>
          </DialogHeader>
          
          <Tabs value={attendanceView} onValueChange={(v) => setAttendanceView(v as any)}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="mark">Mark Attendance</TabsTrigger>
              <TabsTrigger value="history">Attendance History</TabsTrigger>
            </TabsList>

            {/* Mark Attendance Tab */}
            <TabsContent value="mark" className="mt-6">
              <div className="space-y-4">
                {/* Date Selector */}
                <div className="flex items-center justify-between">
                  <Label>Select Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="gap-2">
                        <CalendarCheck className="w-4 h-4" />
                        {format(attendanceDate, "MMM dd, yyyy")}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="end">
                      <CalendarComponent
                        mode="single"
                        selected={attendanceDate}
                        onSelect={(date) => date && setAttendanceDate(date)}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Attendance Summary */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <UserCheck className="w-4 h-4 text-green-600" />
                      <p className="text-sm text-muted-foreground">Present</p>
                    </div>
                    <p className="text-2xl font-semibold">
                      {Object.values(studentAttendance).filter(s => s === "present").length}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <UserX className="w-4 h-4 text-red-600" />
                      <p className="text-sm text-muted-foreground">Absent</p>
                    </div>
                    <p className="text-2xl font-semibold">
                      {Object.values(studentAttendance).filter(s => s === "absent").length}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Clock className="w-4 h-4 text-orange-600" />
                      <p className="text-sm text-muted-foreground">Late</p>
                    </div>
                    <p className="text-2xl font-semibold">
                      {Object.values(studentAttendance).filter(s => s === "late").length}
                    </p>
                  </div>
                </div>

                {/* Student List */}
                <div className="space-y-2">
                  {mockStudents
                    .filter(s => selectedBatch && s.batchId === selectedBatch.id)
                    .map((student) => {
                      const attendance = studentAttendance[student.id];
                      return (
                        <div key={student.id} className="p-4 border rounded-lg">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Avatar className="w-12 h-12">
                                <AvatarFallback className="bg-blue-100 text-blue-700">
                                  {student.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-semibold">{student.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  {student.skillLevel} • {student.age} years
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant={attendance === "present" ? "default" : "outline"}
                                className={attendance === "present" ? "bg-green-600 hover:bg-green-700" : ""}
                                onClick={() => 
                                  setStudentAttendance(prev => ({...prev, [student.id]: "present"}))
                                }
                              >
                                <UserCheck className="w-4 h-4 mr-2" />
                                Present
                              </Button>
                              <Button
                                size="sm"
                                variant={attendance === "absent" ? "destructive" : "outline"}
                                onClick={() => 
                                  setStudentAttendance(prev => ({...prev, [student.id]: "absent"}))
                                }
                              >
                                <UserX className="w-4 h-4 mr-2" />
                                Absent
                              </Button>
                              <Button
                                size="sm"
                                variant={attendance === "late" ? "secondary" : "outline"}
                                onClick={() => 
                                  setStudentAttendance(prev => ({...prev, [student.id]: "late"}))
                                }
                              >
                                <Clock className="w-4 h-4 mr-2" />
                                Late
                              </Button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </TabsContent>

            {/* Attendance History Tab */}
            <TabsContent value="history" className="mt-6">
              <div className="space-y-4">
                {/* Overall Statistics */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Overall Statistics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {mockStudents
                        .filter(s => selectedBatch && s.batchId === selectedBatch.id)
                        .map((student) => {
                          const studentRecords = attendanceRecords.filter(
                            r => r.studentId === student.id && selectedBatch && r.batchId === selectedBatch.id
                          );
                          const presentCount = studentRecords.filter(r => r.status === "present").length;
                          const totalCount = studentRecords.length;
                          const attendanceRate = totalCount > 0 ? Math.round((presentCount / totalCount) * 100) : 0;

                          return (
                            <div key={student.id} className="p-3 border rounded-lg">
                              <p className="font-semibold text-sm truncate">{student.name}</p>
                              <div className="mt-2">
                                <p className="text-2xl font-semibold">{attendanceRate}%</p>
                                <p className="text-xs text-muted-foreground">
                                  {presentCount}/{totalCount} sessions
                                </p>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Attendance Records */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Sessions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {Array.from(
                        new Set(
                          attendanceRecords
                            .filter(r => selectedBatch && r.batchId === selectedBatch.id)
                            .map(r => r.date)
                        )
                      )
                        .sort((a, b) => b.localeCompare(a))
                        .slice(0, 5)
                        .map((date) => {
                          const dateRecords = attendanceRecords.filter(
                            r => r.date === date && selectedBatch && r.batchId === selectedBatch.id
                          );
                          const presentCount = dateRecords.filter(r => r.status === "present").length;
                          const absentCount = dateRecords.filter(r => r.status === "absent").length;
                          const lateCount = dateRecords.filter(r => r.status === "late").length;

                          return (
                            <div key={date} className="p-4 border rounded-lg">
                              <div className="flex items-center justify-between mb-3">
                                <div>
                                  <p className="font-semibold">{format(new Date(date), "MMMM dd, yyyy")}</p>
                                  <p className="text-sm text-muted-foreground">
                                    {dateRecords.length} students marked
                                  </p>
                                </div>
                                <Badge variant="outline">{format(new Date(date), "EEEE")}</Badge>
                              </div>
                              <div className="flex gap-4">
                                <div className="flex items-center gap-2">
                                  <div className="w-3 h-3 rounded-full bg-green-600"></div>
                                  <span className="text-sm">Present: {presentCount}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="w-3 h-3 rounded-full bg-red-600"></div>
                                  <span className="text-sm">Absent: {absentCount}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="w-3 h-3 rounded-full bg-orange-600"></div>
                                  <span className="text-sm">Late: {lateCount}</span>
                                </div>
                              </div>
                              {/* Student Details for this date */}
                              <div className="mt-3 pt-3 border-t">
                                <div className="flex flex-wrap gap-2">
                                  {dateRecords.map((record) => (
                                    <div
                                      key={record.id}
                                      className={`px-2 py-1 rounded-md text-xs ${
                                        record.status === "present"
                                          ? "bg-green-100 text-green-700"
                                          : record.status === "absent"
                                          ? "bg-red-100 text-red-700"
                                          : "bg-orange-100 text-orange-700"
                                      }`}
                                    >
                                      {record.studentName}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <DialogFooter>
            <Button variant="outline" onClick={() => setAttendanceDialogOpen(false)}>
              Close
            </Button>
            {attendanceView === "mark" && (
              <Button onClick={() => setAttendanceDialogOpen(false)}>
                Save Attendance
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Coach Dialog */}
      <Dialog open={addCoachOpen} onOpenChange={setAddCoachOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Add New Coach</DialogTitle>
            <DialogDescription>Enter coach details to add them to your team</DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="font-semibold text-sm">Basic Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 col-span-2">
                  <Label>Full Name *</Label>
                  <Input placeholder="e.g., Coach Vikram Sharma" />
                </div>
                <div className="space-y-2">
                  <Label>Phone Number *</Label>
                  <Input placeholder="+91 98765 43210" />
                </div>
                <div className="space-y-2">
                  <Label>Email Address *</Label>
                  <Input type="email" placeholder="coach@email.com" />
                </div>
                <div className="space-y-2">
                  <Label>Sport/Discipline *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select sport" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="badminton">Badminton</SelectItem>
                      <SelectItem value="tennis">Tennis</SelectItem>
                      <SelectItem value="basketball">Basketball</SelectItem>
                      <SelectItem value="cricket">Cricket</SelectItem>
                      <SelectItem value="football">Football</SelectItem>
                      <SelectItem value="swimming">Swimming</SelectItem>
                      <SelectItem value="table_tennis">Table Tennis</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Years of Experience *</Label>
                  <Input type="number" placeholder="8" min="0" />
                </div>
              </div>
            </div>

            {/* Professional Details */}
            <div className="space-y-4">
              <h3 className="font-semibold text-sm">Professional Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 col-span-2">
                  <Label>Certifications</Label>
                  <Input placeholder="e.g., BWF Level 2, Sports Science Diploma (comma separated)" />
                  <p className="text-xs text-muted-foreground">Separate multiple certifications with commas</p>
                </div>
                <div className="space-y-2">
                  <Label>Price per Session (₹) *</Label>
                  <Input type="number" placeholder="800" min="0" />
                </div>
                <div className="space-y-2">
                  <Label>Availability *</Label>
                  <Input placeholder="e.g., Mon, Wed, Fri - 5:00 PM - 8:00 PM" />
                </div>
              </div>
            </div>

            {/* Skill Levels */}
            <div className="space-y-4">
              <h3 className="font-semibold text-sm">Skill Levels (Select all that apply)</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="beginner" />
                  <Label htmlFor="beginner" className="cursor-pointer">Beginner</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="intermediate" />
                  <Label htmlFor="intermediate" className="cursor-pointer">Intermediate</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="advanced" />
                  <Label htmlFor="advanced" className="cursor-pointer">Advanced</Label>
                </div>
              </div>
            </div>

            {/* Training Modes */}
            <div className="space-y-4">
              <h3 className="font-semibold text-sm">Training Modes (Select all that apply)</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="offline" />
                  <Label htmlFor="offline" className="cursor-pointer">Offline (In-person)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="online" />
                  <Label htmlFor="online" className="cursor-pointer">Online (Virtual)</Label>
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="space-y-2">
              <Label>Additional Notes</Label>
              <Textarea 
                placeholder="Any additional information about the coach..."
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setAddCoachOpen(false)}>Cancel</Button>
            <Button onClick={() => setAddCoachOpen(false)}>Add Coach</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Create Batch Dialog */}
      <Dialog open={createBatchOpen} onOpenChange={setCreateBatchOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Create New Batch</DialogTitle>
            <DialogDescription>Set up a new training batch or coaching program</DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            {/* Basic Details */}
            <div className="space-y-4">
              <h3 className="font-semibold text-sm">Basic Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 col-span-2">
                  <Label>Batch Name *</Label>
                  <Input placeholder="e.g., Advanced Badminton Batch" />
                </div>
                <div className="space-y-2">
                  <Label>Sport *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select sport" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="badminton">Badminton</SelectItem>
                      <SelectItem value="tennis">Tennis</SelectItem>
                      <SelectItem value="basketball">Basketball</SelectItem>
                      <SelectItem value="cricket">Cricket</SelectItem>
                      <SelectItem value="football">Football</SelectItem>
                      <SelectItem value="swimming">Swimming</SelectItem>
                      <SelectItem value="table_tennis">Table Tennis</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Assigned Coach *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select coach" />
                    </SelectTrigger>
                    <SelectContent>
                      {coaches.map((coach) => (
                        <SelectItem key={coach.id} value={coach.id.toString()}>
                          {coach.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Batch Type *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="group">Group Training</SelectItem>
                      <SelectItem value="personal">Personal (1:1)</SelectItem>
                      <SelectItem value="academy">Academy Batch</SelectItem>
                      <SelectItem value="camp">Training Camp</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Skill Level *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select skill level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                      <SelectItem value="mixed">Mixed Levels</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Schedule & Capacity */}
            <div className="space-y-4">
              <h3 className="font-semibold text-sm">Schedule & Capacity</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 col-span-2">
                  <Label>Schedule *</Label>
                  <Input placeholder="e.g., Mon, Wed, Fri - 6:00 PM" />
                  <p className="text-xs text-muted-foreground">Specify days and time</p>
                </div>
                <div className="space-y-2">
                  <Label>Session Duration *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30min">30 minutes</SelectItem>
                      <SelectItem value="45min">45 minutes</SelectItem>
                      <SelectItem value="1hr">1 hour</SelectItem>
                      <SelectItem value="1.5hr">1.5 hours</SelectItem>
                      <SelectItem value="2hr">2 hours</SelectItem>
                      <SelectItem value="2.5hr">2.5 hours</SelectItem>
                      <SelectItem value="3hr">3 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Maximum Capacity *</Label>
                  <Input type="number" placeholder="10" min="1" />
                  <p className="text-xs text-muted-foreground">Maximum number of students</p>
                </div>
                <div className="space-y-2">
                  <Label>Start Date *</Label>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <Label>End Date (Optional)</Label>
                  <Input type="date" />
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="space-y-4">
              <h3 className="font-semibold text-sm">Pricing</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Price per Month (₹) *</Label>
                  <Input type="number" placeholder="6000" min="0" />
                </div>
                <div className="space-y-2">
                  <Label>Registration Fee (₹)</Label>
                  <Input type="number" placeholder="1000" min="0" />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label>Batch Description</Label>
              <Textarea 
                placeholder="Describe what students will learn, training methodology, goals, etc..."
                rows={4}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCreateBatchOpen(false)}>Cancel</Button>
            <Button onClick={() => setCreateBatchOpen(false)}>Create Batch</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* End Batch Confirmation Dialog */}
      <Dialog open={endBatchOpen} onOpenChange={setEndBatchOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>End Batch</DialogTitle>
            <DialogDescription>
              Are you sure you want to end this batch? This action will mark the batch as completed.
            </DialogDescription>
          </DialogHeader>
          {selectedBatchToEnd && (
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg space-y-2">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">{selectedBatchToEnd.name}</h4>
                  <Badge variant="outline">{selectedBatchToEnd.sport}</Badge>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-muted-foreground">Coach</p>
                    <p className="font-medium">{selectedBatchToEnd.coach}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Students</p>
                    <p className="font-medium">{selectedBatchToEnd.students} enrolled</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Start Date</p>
                    <p className="font-medium">{selectedBatchToEnd.startDate}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Schedule</p>
                    <p className="font-medium">{selectedBatchToEnd.schedule}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>End Date *</Label>
                  <Input type="date" defaultValue={format(new Date(), "yyyy-MM-dd")} />
                </div>
                <div className="space-y-2">
                  <Label>Reason for Ending</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select reason" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="completed">Batch Completed Successfully</SelectItem>
                      <SelectItem value="low_enrollment">Low Enrollment</SelectItem>
                      <SelectItem value="coach_unavailable">Coach Unavailable</SelectItem>
                      <SelectItem value="venue_issues">Venue Issues</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Additional Notes</Label>
                  <Textarea 
                    placeholder="Any additional information about ending this batch..."
                    rows={3}
                  />
                </div>
              </div>

              <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-orange-900">Important:</p>
                    <ul className="mt-1 text-orange-800 space-y-1 list-disc list-inside">
                      <li>Students will be notified about batch closure</li>
                      <li>No new sessions can be scheduled after ending</li>
                      <li>Attendance and payment records will be preserved</li>
                      <li>You can view batch details in history</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setEndBatchOpen(false)}>Cancel</Button>
            <Button 
              variant="destructive" 
              onClick={() => setEndBatchOpen(false)}
              className="gap-2"
            >
              <XCircle className="w-4 h-4" />
              End Batch
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}