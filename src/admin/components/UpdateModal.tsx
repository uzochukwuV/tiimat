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


  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Edit</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm data={data} action={action} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Edit </Button>
      </DrawerTrigger>
      <DrawerContent color="#fff" className=" bg-white">
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm data={data} action={action} className="px-4" />
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
}: React.ComponentProps<"form"> & { data: any; action: any }) {
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
      className={cn("grid items-start gap-4", className)}
    >
      {keys.map((item) => {
        return (
          <div className="grid gap-2">
            <Label htmlFor={item}>{item}</Label>
            <Input
              type="text"
              id={item}
              onChange={handleChange}
              defaultValue={data[item]}
              name={item}
            />
          </div>
        );
      })}
      <Button disabled={loading} type="submit">
        Save changes {loading && <LoaderCircle />}{" "}
      </Button>
    </form>
  );
}
