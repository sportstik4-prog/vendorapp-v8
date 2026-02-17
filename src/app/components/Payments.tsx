import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Wallet,
  TrendingUp,
  Download,
  Calendar,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCw,
  CheckCircle2,
  Clock,
  XCircle,
  Filter,
  CreditCard,
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Progress } from "./ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";

const earningsData = {
  today: 12450,
  thisWeek: 77200,
  thisMonth: 285000,
  totalEarnings: 1245000,
};

const settlements = [
  {
    id: "STL001",
    date: "2026-02-15",
    amount: 65400,
    commission: 6540,
    netAmount: 58860,
    status: "completed",
    bookings: 132,
    transactionId: "TXN892374982",
  },
  {
    id: "STL002",
    date: "2026-02-08",
    amount: 58200,
    commission: 5820,
    netAmount: 52380,
    status: "completed",
    bookings: 118,
    transactionId: "TXN892374981",
  },
  {
    id: "STL003",
    date: "2026-02-01",
    amount: 71500,
    commission: 7150,
    netAmount: 64350,
    status: "completed",
    bookings: 145,
    transactionId: "TXN892374980",
  },
  {
    id: "STL004",
    date: "2026-02-22",
    amount: 77200,
    commission: 7720,
    netAmount: 69480,
    status: "pending",
    bookings: 156,
    transactionId: null,
  },
];

const transactions = [
  {
    id: "TXN001",
    type: "booking",
    description: "Court 1 - Badminton Booking",
    player: "Rahul Sharma",
    amount: 500,
    commission: 50,
    date: "2026-02-17",
    time: "09:00 AM",
    status: "completed",
  },
  {
    id: "TXN002",
    type: "booking",
    description: "Court 3 - Tennis Booking",
    player: "Priya Mehta",
    amount: 800,
    commission: 80,
    date: "2026-02-17",
    time: "10:00 AM",
    status: "completed",
  },
  {
    id: "TXN003",
    type: "refund",
    description: "Court 2 - Badminton Booking Cancelled",
    player: "Amit Kumar",
    amount: -500,
    commission: -50,
    date: "2026-02-17",
    time: "11:30 AM",
    status: "completed",
  },
  {
    id: "TXN004",
    type: "booking",
    description: "Court 5 - Squash Booking",
    player: "Sneha Reddy",
    amount: 600,
    commission: 60,
    date: "2026-02-17",
    time: "03:00 PM",
    status: "completed",
  },
  {
    id: "TXN005",
    type: "coaching",
    description: "Coach Vikram - Advanced Badminton Session",
    player: "Batch Payment",
    amount: 1200,
    commission: 120,
    date: "2026-02-17",
    time: "06:00 PM",
    status: "completed",
  },
];

const refundRequests = [
  {
    id: "REF001",
    bookingId: "BK089",
    player: "Raj Malhotra",
    amount: 800,
    reason: "Court maintenance issue",
    requestDate: "2026-02-17",
    status: "pending",
    court: "Court 3",
  },
  {
    id: "REF002",
    bookingId: "BK092",
    player: "Kavita Nair",
    amount: 500,
    reason: "Personal emergency",
    requestDate: "2026-02-16",
    status: "approved",
    court: "Court 1",
  },
  {
    id: "REF003",
    bookingId: "BK095",
    player: "Rohit Verma",
    amount: 1200,
    reason: "Weather conditions",
    requestDate: "2026-02-16",
    status: "rejected",
    court: "Court 4",
  },
];

export function Payments() {
  const [selectedPeriod, setSelectedPeriod] = useState("thisMonth");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const commissionRate = 10; // 10%
  const pendingSettlement = settlements.find((s) => s.status === "pending");

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold">Payments & Settlements</h1>
          <p className="text-muted-foreground mt-1">Track earnings, settlements, and transactions</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="thisWeek">This Week</SelectItem>
              <SelectItem value="thisMonth">This Month</SelectItem>
              <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Earnings Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-50 rounded-lg">
                <DollarSign className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Today's Revenue</p>
                <p className="text-2xl font-semibold">₹{earningsData.today.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">This Week</p>
                <p className="text-2xl font-semibold">₹{earningsData.thisWeek.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-50 rounded-lg">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">This Month</p>
                <p className="text-2xl font-semibold">₹{earningsData.thisMonth.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-orange-50 rounded-lg">
                <Wallet className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Earnings</p>
                <p className="text-2xl font-semibold">₹{(earningsData.totalEarnings / 1000).toFixed(0)}k</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pending Settlement */}
      {pendingSettlement && (
        <Card className="border-emerald-200 bg-emerald-50">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-semibold text-lg">Upcoming Settlement</h3>
                  <Badge variant="secondary" className="bg-emerald-600 text-white">
                    Pending
                  </Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Settlement ID</p>
                    <p className="font-semibold">{pendingSettlement.id}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Expected Date</p>
                    <p className="font-semibold">{pendingSettlement.date}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Total Bookings</p>
                    <p className="font-semibold">{pendingSettlement.bookings}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Net Amount</p>
                    <p className="font-semibold text-emerald-600">
                      ₹{pendingSettlement.netAmount.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
              <Button className="gap-2">
                <RefreshCw className="w-4 h-4" />
                View Details
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tabs */}
      <Tabs defaultValue="settlements">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto">
          <TabsTrigger value="settlements">Settlements</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="refunds">Refunds</TabsTrigger>
        </TabsList>

        {/* Settlements Tab */}
        <TabsContent value="settlements" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Settlement History</CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Commission Rate:</span>
                  <Badge variant="outline">{commissionRate}%</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {settlements.map((settlement) => (
                  <Dialog key={settlement.id}>
                    <DialogTrigger asChild>
                      <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h4 className="font-semibold">{settlement.id}</h4>
                              <Badge
                                variant={settlement.status === "completed" ? "default" : "secondary"}
                                className={settlement.status === "completed" ? "bg-emerald-600" : ""}
                              >
                                {settlement.status}
                              </Badge>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                              <div>
                                <p className="text-muted-foreground">Date</p>
                                <p className="font-medium">{settlement.date}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Gross Amount</p>
                                <p className="font-medium">₹{settlement.amount.toLocaleString()}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Commission</p>
                                <p className="font-medium text-red-600">
                                  -₹{settlement.commission.toLocaleString()}
                                </p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Net Amount</p>
                                <p className="font-medium text-emerald-600">
                                  ₹{settlement.netAmount.toLocaleString()}
                                </p>
                              </div>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Settlement Details</DialogTitle>
                        <DialogDescription>Settlement ID: {settlement.id}</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label className="text-sm text-muted-foreground">Settlement Date</Label>
                            <p className="font-medium">{settlement.date}</p>
                          </div>
                          <div>
                            <Label className="text-sm text-muted-foreground">Status</Label>
                            <Badge
                              variant={settlement.status === "completed" ? "default" : "secondary"}
                              className={settlement.status === "completed" ? "bg-emerald-600" : ""}
                            >
                              {settlement.status}
                            </Badge>
                          </div>
                          <div>
                            <Label className="text-sm text-muted-foreground">Total Bookings</Label>
                            <p className="font-medium">{settlement.bookings}</p>
                          </div>
                          <div>
                            <Label className="text-sm text-muted-foreground">Transaction ID</Label>
                            <p className="font-medium text-xs">
                              {settlement.transactionId || "Pending"}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-2 pt-4 border-t">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Gross Amount</span>
                            <span className="font-semibold">₹{settlement.amount.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center justify-between text-red-600">
                            <span className="text-sm">Platform Commission ({commissionRate}%)</span>
                            <span className="font-semibold">
                              -₹{settlement.commission.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-lg font-semibold pt-2 border-t">
                            <span>Net Amount</span>
                            <span className="text-emerald-600">
                              ₹{settlement.netAmount.toLocaleString()}
                            </span>
                          </div>
                        </div>
                        {settlement.status === "completed" && (
                          <Button variant="outline" className="w-full gap-2">
                            <Download className="w-4 h-4" />
                            Download Invoice
                          </Button>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Transactions Tab */}
        <TabsContent value="transactions" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Transactions</CardTitle>
                <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="booking">Bookings</SelectItem>
                    <SelectItem value="coaching">Coaching</SelectItem>
                    <SelectItem value="refund">Refunds</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {transactions
                  .filter((t) => selectedFilter === "all" || t.type === selectedFilter)
                  .map((transaction) => (
                    <div
                      key={transaction.id}
                      className="p-4 border rounded-lg flex items-center justify-between hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div
                          className={`p-3 rounded-lg ${
                            transaction.type === "refund"
                              ? "bg-red-50"
                              : transaction.type === "coaching"
                              ? "bg-purple-50"
                              : "bg-emerald-50"
                          }`}
                        >
                          {transaction.type === "refund" ? (
                            <ArrowDownRight className="w-5 h-5 text-red-600" />
                          ) : (
                            <ArrowUpRight className="w-5 h-5 text-emerald-600" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-medium">{transaction.description}</p>
                            <Badge variant="outline" className="text-xs">
                              {transaction.type}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{transaction.player}</p>
                          <p className="text-xs text-muted-foreground">
                            {transaction.date} · {transaction.time}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p
                          className={`text-lg font-semibold ${
                            transaction.amount >= 0 ? "text-emerald-600" : "text-red-600"
                          }`}
                        >
                          {transaction.amount >= 0 ? "+" : ""}₹{Math.abs(transaction.amount)}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Commission: ₹{Math.abs(transaction.commission)}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Refunds Tab */}
        <TabsContent value="refunds" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Refund Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {refundRequests.map((refund) => (
                  <div key={refund.id} className="p-4 border rounded-lg">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold">{refund.id}</h4>
                          <Badge
                            variant={
                              refund.status === "approved"
                                ? "default"
                                : refund.status === "rejected"
                                ? "destructive"
                                : "secondary"
                            }
                            className={refund.status === "approved" ? "bg-emerald-600" : ""}
                          >
                            {refund.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Booking ID</p>
                            <p className="font-medium">{refund.bookingId}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Player</p>
                            <p className="font-medium">{refund.player}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Court</p>
                            <p className="font-medium">{refund.court}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Amount</p>
                            <p className="font-medium text-red-600">₹{refund.amount}</p>
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm text-muted-foreground">Reason: {refund.reason}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Requested on: {refund.requestDate}
                          </p>
                        </div>
                      </div>
                      {refund.status === "pending" && (
                        <div className="flex gap-2">
                          <Button variant="outline" className="gap-2" size="sm">
                            <CheckCircle2 className="w-4 h-4" />
                            Approve
                          </Button>
                          <Button variant="destructive" className="gap-2" size="sm">
                            <XCircle className="w-4 h-4" />
                            Reject
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Revenue Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue Breakdown by Sport</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { sport: "Badminton", revenue: 95000, percentage: 33 },
              { sport: "Tennis", revenue: 82000, percentage: 29 },
              { sport: "Basketball", revenue: 68000, percentage: 24 },
              { sport: "Squash", revenue: 40000, percentage: 14 },
            ].map((item) => (
              <div key={item.sport}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">{item.sport}</span>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      ₹{item.revenue.toLocaleString()}
                    </span>
                    {" · "}
                    {item.percentage}%
                  </div>
                </div>
                <Progress value={item.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
