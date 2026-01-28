import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon, Clock, Stethoscope, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const departments = [
  { id: '1', name: 'Cardiology' },
  { id: '2', name: 'Orthopedics' },
  { id: '3', name: 'Neurology' },
  { id: '4', name: 'General Medicine' },
  { id: '5', name: 'ENT' },
  { id: '6', name: 'Dermatology' },
];

const doctors = [
  { id: '1', name: 'Dr. Priya Sharma', department: 'Cardiology', fee: 800, available: true },
  { id: '2', name: 'Dr. Rajesh Kumar', department: 'Orthopedics', fee: 700, available: true },
  { id: '3', name: 'Dr. Meena Gupta', department: 'Neurology', fee: 900, available: false },
  { id: '4', name: 'Dr. Anil Verma', department: 'General Medicine', fee: 500, available: true },
];

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
];

export default function BookAppointmentPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [appointmentType, setAppointmentType] = useState('consultation');
  const [reason, setReason] = useState('');

  const filteredDoctors = selectedDepartment
    ? doctors.filter(d => d.department === departments.find(dept => dept.id === selectedDepartment)?.name)
    : doctors;

  const selectedDoctorData = doctors.find(d => d.id === selectedDoctor);

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold">Book Appointment</h1>
          <p className="text-muted-foreground mt-1">Schedule a new appointment with a doctor</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Department & Doctor Selection */}
            <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Select Doctor</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Department</Label>
                    <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept.id} value={dept.id}>
                            {dept.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Appointment Type</Label>
                    <Select value={appointmentType} onValueChange={setAppointmentType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consultation">Consultation</SelectItem>
                        <SelectItem value="follow-up">Follow-up</SelectItem>
                        <SelectItem value="emergency">Emergency</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Doctor Cards */}
                <div className="space-y-3 mt-4">
                  {filteredDoctors.map((doctor) => (
                    <div
                      key={doctor.id}
                      onClick={() => doctor.available && setSelectedDoctor(doctor.id)}
                      className={cn(
                        'p-4 rounded-lg border-2 cursor-pointer transition-all',
                        selectedDoctor === doctor.id
                          ? 'border-primary bg-primary/5'
                          : doctor.available
                          ? 'border-border hover:border-primary/30'
                          : 'border-border bg-muted/50 cursor-not-allowed opacity-60'
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <Stethoscope className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{doctor.name}</p>
                            <p className="text-sm text-muted-foreground">{doctor.department}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">₹{doctor.fee}</p>
                          <Badge variant={doctor.available ? 'completed' : 'cancelled'}>
                            {doctor.available ? 'Available' : 'Not Available'}
                          </Badge>
                        </div>
                      </div>
                      {selectedDoctor === doctor.id && (
                        <div className="absolute top-2 right-2">
                          <Check className="w-5 h-5 text-primary" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Date & Time Selection */}
            <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Select Date & Time</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          'w-full justify-start text-left font-normal h-12',
                          !selectedDate && 'text-muted-foreground'
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, 'PPP') : 'Pick a date'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label>Available Slots</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.slice(0, 6).map((slot) => (
                      <Button
                        key={slot}
                        variant={selectedTime === slot ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedTime(slot)}
                        className="text-xs"
                      >
                        {slot}
                      </Button>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {timeSlots.slice(6).map((slot) => (
                      <Button
                        key={slot}
                        variant={selectedTime === slot ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedTime(slot)}
                        className="text-xs"
                      >
                        {slot}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Reason */}
            <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Reason for Visit</h3>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Briefly describe your symptoms or reason for the appointment..."
                className="w-full h-24 p-3 rounded-lg border border-input bg-background resize-none focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl border border-border p-6 shadow-sm sticky top-6">
              <h3 className="text-lg font-semibold mb-4">Appointment Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Doctor</span>
                  <span className="font-medium">{selectedDoctorData?.name || '-'}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Department</span>
                  <span className="font-medium">{selectedDoctorData?.department || '-'}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Date</span>
                  <span className="font-medium">
                    {selectedDate ? format(selectedDate, 'dd MMM yyyy') : '-'}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Time</span>
                  <span className="font-medium">{selectedTime || '-'}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Type</span>
                  <Badge variant="soft" className="capitalize">{appointmentType}</Badge>
                </div>
                <div className="flex justify-between py-2 text-lg font-semibold">
                  <span>Consultation Fee</span>
                  <span className="text-primary">₹{selectedDoctorData?.fee || 0}</span>
                </div>
              </div>

              <Button 
                className="w-full mt-6" 
                size="lg"
                disabled={!selectedDoctor || !selectedDate || !selectedTime}
              >
                Confirm Booking
              </Button>
              <p className="text-xs text-center text-muted-foreground mt-3">
                Payment will be collected at the reception
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
