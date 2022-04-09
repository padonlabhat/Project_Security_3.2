import tkinter as tk
import tkinter.font as tkFont

class App:
    def __init__(self, root):
        #setting title
        root.title("undefined")
        #setting window size
        width=600
        height=500
        screenwidth = root.winfo_screenwidth()
        screenheight = root.winfo_screenheight()
        alignstr = '%dx%d+%d+%d' % (width, height, (screenwidth - width) / 2, (screenheight - height) / 2)
        root.geometry(alignstr)
        root.resizable(width=False, height=False)

        GLabel_455=tk.Label(root)
        ft = tkFont.Font(family='Times',size=18)
        GLabel_455["font"] = ft
        GLabel_455["fg"] = "#333333"
        GLabel_455["justify"] = "center"
        GLabel_455["text"] = "Security Menu"
        GLabel_455.place(x=210,y=30,width=150,height=30)

        GButton_791=tk.Button(root)
        GButton_791["bg"] = "#efefef"
        ft = tkFont.Font(family='Times',size=10)
        GButton_791["font"] = ft
        GButton_791["fg"] = "#000000"
        GButton_791["justify"] = "center"
        GButton_791["text"] = "Button"
        GButton_791.place(x=190,y=90,width=187,height=57)
        GButton_791["command"] = self.GButton_791_command

        GButton_700=tk.Button(root)
        GButton_700["bg"] = "#efefef"
        ft = tkFont.Font(family='Times',size=10)
        GButton_700["font"] = ft
        GButton_700["fg"] = "#000000"
        GButton_700["justify"] = "center"
        GButton_700["text"] = "Button"
        GButton_700.place(x=190,y=160,width=187,height=56)
        GButton_700["command"] = self.GButton_700_command

    def GButton_791_command(self):
        print("Nahee")


    def GButton_700_command(self):
        print("Dekhear")

if __name__ == "__main__":
    root = tk.Tk()
    app = App(root)
    root.mainloop()
