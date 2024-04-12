// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
/*
id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        school TEXT NOT NULL,
        odr TEXT NOT NULL,
        suspensions TEXT NOT NULL,
        gender TEXT NOT NULL,
        ethnicity TEXT NOT NULL,
        english_learner BOOLEAN NOT NULL,
        grade TEXT NOT NULL,
        mysaebrs_emo TEXT NOT NULL,
        mysaebrs_soc TEXT NOT NULL,
        mysaebrs_aca TEXT NOT NULL,
        saebrs_emo TEXT NOT NULL,
        saebrs_soc TEXT NOT NULL,
        saebrs_aca TEXT NOT NULL, 
        read_risk TEXT NOT NULL,
        math_risk TEXT NOT NULL
*/

export type Student = {
  id: string;
  school: string;
  odr: string;
  suspensions: string;
  gender: string;
  ethnicity: string;
  english_learner: boolean;
  grade: string;
  mysaebrs_emo: string;
  mysaebrs_soc: string;
  mysaebrs_aca: string;
  saebrs_emo: string;
  saebrs_soc: string;
  saebrs_aca: string;
  read_risk: string;
  math_risk: string;
}

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type SchoolField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};
