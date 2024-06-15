"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import GeneratePodcast from '../../../components/GeneratePodcast'
import GenerateThumbnail from '../../../components/GenerateThumbnail'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Loader } from "lucide-react"


const voiceCategories = ['alloy', 'shimmer', 'nova', 'echo', 'fable', 'onyx'];



const formSchema = z.object({
  podcastTitle: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  podcastDescription: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),

})

const CreatePodcast = () => {
  const [voiceType, setVoiceType] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      podcastTitle: "",
      podcastDescription: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <section className="flex flex-col mt-10">
      <h1 className="text-20 font-bold text-white-1">CreatePodcast</h1>


      <Form {...form}>

        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-12 flex flex-col w-full">
          <div className="flex flex-col border-b border-black-5 pb-10">
            <FormField
              control={form.control}
              name="podcastTitle"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2.5">
                  <FormLabel className=" text-16 font-bold text-white-1">Username</FormLabel>
                  <FormControl>
                    <Input className="input-class focus-visible:ring-orange-1" placeholder="pro podcast" {...field} />
                  </FormControl>

                  <FormMessage className="text-white-1" />
                </FormItem>
              )}
            />
            <div className="flex flex-col gap-2.5">
              <Label className="text-16 font-bold text-white-1">
                Select AI Voice
              </Label>

              <Select onValueChange={(value)=> setVoiceType(value)}>
                <SelectTrigger className=" text-16 w-full border-none bg-black-1 text-gray-1">
                  <SelectValue placeholder="Select AI voice" />
                </SelectTrigger>
                <SelectContent className="text-16 border-none bg-black-1 text-white-1 focus:ring-orange-1">
                  {voiceCategories.map((voice)=>(
                    <SelectItem  key={voice} value={voice} className="capitalize focus:bg-orange-1">
                      {voice}
                    </SelectItem>
                  ))}
                 
                </SelectContent>
                {voiceType && (
                  <audio
                  src={`/${voiceType}.mp3`}
                  autoPlay
                  className="hidden"
                  />
                )}
              </Select>

            </div>

            <FormField
              control={form.control}
              name="podcastDescription"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2.5">
                  <FormLabel className=" text-16 font-bold text-white-1">Description</FormLabel>
                  <FormControl>
                    <Textarea className="input-class focus-visible:ring-orange-1" placeholder="Write a short podcast description" {...field} />
                  </FormControl>

                  <FormMessage className="text-white-1" />
                </FormItem>
              )}
            />
            
          </div>
          <div className=" pt-10 flex flex-col">
            <GeneratePodcast/>

            <GenerateThumbnail/>

            <div className="mt-10 w-full">
              <Button type="submit" 
              className="text-16 w-full bg-orange-1 py-4 font-extrabold text-white-1 transition-all duration-500 hover:bg-black-1">
              {isSubmitting ? (
                <>
                 submitting...
                <Loader size={20} className="animate-spin mr-2"/>
              
                </>
              ): (
                'Submit & Publish Podcast'
              )}
              </Button>

            </div>

          </div>


        </form>
      </Form>





    </section>
  )
}


export default CreatePodcast;