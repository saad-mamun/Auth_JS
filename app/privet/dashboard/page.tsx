import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 bg-gray-100 dark:bg-gray-950">
        <div className="p-6 grid gap-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,98.21</div>
                <p>+20.1% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Subscription
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$+4550</div>
                <p>+20.1% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$+1220.21</div>
                <p>+20.1% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Now
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$+755</div>
                <p>+20.1% from last month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Recent Signup</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Plan</TableHead>
                            <TableHead>Data</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>John Doe</TableCell>
                            <TableCell>johndoe@gmail.com</TableCell>
                            <TableCell>Pro</TableCell>
                            <TableCell>7-07-2025</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Mamun</TableCell>
                            <TableCell>johndoe@gmail.com</TableCell>
                            <TableCell>Pro</TableCell>
                            <TableCell>7-07-2025</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>John Doe</TableCell>
                            <TableCell>johndoe@gmail.com</TableCell>
                            <TableCell>Pro</TableCell>
                            <TableCell>7-07-2025</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>John Doe</TableCell>
                            <TableCell>johndoe@gmail.com</TableCell>
                            <TableCell>Pro</TableCell>
                            <TableCell>7-07-2025</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>John Doe</TableCell>
                            <TableCell>johndoe@gmail.com</TableCell>
                            <TableCell>Pro</TableCell>
                            <TableCell>7-07-2025</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
