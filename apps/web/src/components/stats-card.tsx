import { Card, CardContent, CardHeader, CardTitle } from "@midika/ui";

interface StatsCardProps {
  label: string;
  value: string;
  helper?: string;
}

export function StatsCard({ label, value, helper }: StatsCardProps) {
  return (
    <Card className="border border-border/70 bg-card/80">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {label}
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="text-3xl font-semibold tracking-tight text-foreground">
          {value}
        </div>
        {helper ? (
          <p className="mt-2 text-xs text-muted-foreground">{helper}</p>
        ) : null}
      </CardContent>
    </Card>
  );
}
