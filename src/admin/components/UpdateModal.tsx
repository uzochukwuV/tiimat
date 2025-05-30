import * as React from "react";

import { cn } from "@/lib/utils";
// import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";
// import { useNavigate } from "react-router-dom";

export function UpdateModal({ data, action }: any) {
  const [open, setOpen] = React.useState(false);
  // const isDesktop = useMediaQuery("(min-width: 768px)")
  const isDesktop = true;

  console.log(data)
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Edit</Button>
        </DialogTrigger>
        <DialogContent className="sm:min-w-[425px] md:min-w-[600px] lg:min-w-[800px]">
          <DialogHeader>
            <DialogTitle>Edit</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm data={data} action={action} setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer  open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Edit </Button>
      </DrawerTrigger>
      <DrawerContent color="#fff" className=" bg-white w-[800px]">
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm data={data} action={action} setOpen={setOpen} className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({
  className,
  data,
  action,
  setOpen,
}: React.ComponentProps<"form"> & { data: any; action: any, setOpen:any }) {
  const [formState, setFormState] = React.useState(data);
  const [loading, setLoading] = React.useState(false);
  const keys = Object.keys(data);
  // const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await action({ payload: formState });
      toast("Update Successfull");
      // navigate(0);
    } catch (error) {
      toast("An error Occured, please try again or check your internet");
    }
    setLoading(false);
    setOpen(false)
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormState((prev: any) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{scrollbarColor: "transparent", scrollbarWidth: "none"}}
      className={cn("grid items-start max-h-[600px] overflow-scroll w-full gap-4", className)}
    >
      {keys.map((item) => {
        return (
          <div className="grid gap-2 max-h-[600px] ">
           {
            item.includes("createdAt") || item.includes("updatedAt") || item.includes("id") ? null: (
              <div>
                 <Label htmlFor={item}>{item}</Label>
             <Input
              type="text"
              id={item}
              height={item.includes("topic") ? 200: 100}
              onChange={handleChange}
              defaultValue={data[item]}
              name={item}
              className=" bg-white"
            />
              </div>
            )
           }
          </div>
        );
      })}
      <Button disabled={loading} type="submit">
        Save changes {loading && <LoaderCircle />}{" "}
      </Button>
    </form>
  );
}
