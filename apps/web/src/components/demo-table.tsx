import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@midika/ui";

interface TableRowData {
  name: string;
  status: string;
  spend: string;
  usage: string;
  updated: string;
}

interface DemoTableProps {
  title: string;
  subtitle: string;
  columns: {
    name: string;
    status: string;
    spend: string;
    usage: string;
    updated: string;
  };
  rows: TableRowData[];
}

export function DemoTable({ title, subtitle, columns, rows }: DemoTableProps) {
  return (
    <Card className="border border-border/70 bg-card/80">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{columns.name}</TableHead>
              <TableHead>{columns.status}</TableHead>
              <TableHead className="text-right">{columns.spend}</TableHead>
              <TableHead className="text-right">{columns.usage}</TableHead>
              <TableHead className="text-right">{columns.updated}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell className="text-right">{row.spend}</TableCell>
                <TableCell className="text-right">{row.usage}</TableCell>
                <TableCell className="text-right text-muted-foreground">
                  {row.updated}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableCaption className="pt-4 text-xs text-muted-foreground">
            {subtitle}
          </TableCaption>
        </Table>
      </CardContent>
    </Card>
  );
}
