export interface TShift {
  id: number;
  role: string;
  date: string;
  time: string;
  location: string;
}

export interface TConsultantStats {
  shifts: number;
  hours: number;
  rating: number;
}

export interface TPastShift {
  id: number;
  role: string;
  company: string;
  date: string;
  hours: number;
  rating: number;
}


export interface TLocationSuggestion {
  name: string;
}

export interface TCompetence {
  name: string;
}

export interface TTimeSlot {
  label: string;
}
