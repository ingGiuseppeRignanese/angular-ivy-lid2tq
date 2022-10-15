import { getLocaleTimeFormat } from '@angular/common';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, Input, Output, VERSION, ɵresetJitOptions } from '@angular/core';
import { getValueSymbolOfDeclaration } from '@angular/core/schematics/utils/typescript/symbol';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}
import Java.until.Scanner;
public class Lunchlcm {
  public static void main(String[]args)
  {
    Scanner sc=new Scanner(System.in);
    System.out.println("Enter the day intercal ofTony");
    int n1=sc.nextInt();
    System.out.println("Enter the day interval ofPotts");
    int n2=sc.nextInt();
    if(n1<=0 && n2=0)
    {
      System.out.println("Given interval is not valid");
      return;
    }
    int a=n1;
    int b=n2;
    while(n2>0)
    {
      if (n1>n2)
      {
        n1=n1-n2;
      } else
    {
      n2=n2-n1;
    }
  }
    int gcd=n1;
    int lcm= (a*b)/gcd
    System.out.println("Tony and Potts will have lunch together on"+lcm+"day");
   }
}
INPUT:Enter the String:  GOOD
      Enter the sentence: GOOD FOOD GOOD 

      OUTPUT: Score is 2
      import java.until*;
      class PrintMessage
      {
        public static void main (String[]args){
          Scanner sc=new Scanner(System.in);
          System.out.printl("Enter the string");
          String s=sc.next()
          int count=0
          int sum=2
          for(int i=0;i<s.lenght()i++)
          {
            if(Character.isDigit(s.charAt(i)))||Charter.isLetter(s.charAt(i))||s.charAt(i=='')
            {
              continue;
            }
          }
          System.out.println("Enter the sentence");
          sc.nextLine();
          String sentence=sc.nextLine()
          String[] w=sentence.split("");
          for(int i=0;i<w.lenght;i++
            {
              if(w[i].equalsIgnoreCase(s))
            {
              sum=sum*2;
            }
          }
        }
        if(cout>2)
        {
          sum=sum*2;
        }
      }
    }
    if(cout>2)
    {
      System.out.println("Score is"+sum);
    }
  }
}

import java.until.Scanner;
public class CountWords{
public static void main(String[]args)
  Scanner in= new Scanner(System.in);
  String word, sentence;ed
  int count=0
  System.out.println("Enter a sentence");
  sentence=in.nextLine();
  System.out.printl("Enter a sentence");
  sentence=in.nextLine();

  in(!(word.matches("[a-z]+"))) {
    System.out.printl("Enter a sentence");
    sentence=in.nextLine();

    if(!(word.matches([a-z]+))){
      System.out.printl("Invalid Input");
      return;
    }
    String words[]=sentence.to.LowerCase().split("");
    for(int i=0; i<words.length; i++){
      if(word.equals(words[i])) {
        if (word.equals(words[i])){
          count++;
        }
        }
        System.out.printl("Score is:"+((int)Math.pow(2,count-1)));
      }
    }
    INPUT: Enter the string GOOD 
          Enter the sentence GOOD FOOD GOOD LIFE 
    OUTPUT: Score is 2

    import java.util*;
    class PrintMessage
    {
      public static void main (String[]) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the string");
        String s=sc.next();
        int count=0
        int sum=2
        for(int i=0;i<s.length();i++)
        {
          if(Character.isDigit(s.charAt(i)))|| Charter.isLetter(s.charAt(i))||s.charAt(i)=='')
          {
            continue;
          }
          else
          {
            System.out.printl(s+"is not valid sreing");
            return;
          }
        }
        System.out.printl("Enter the sentence");
        sc.nextLine();
        String dentence=sc.nextLine();
        String[]w=sentence.split("");
        for(int i=0;i<w.legth;i++)
        {
          if(w[i].equalsIgnoreCase(s))
          {
            count++
            if(count>2)
            {
              sum=sum*2;
            }
          }
        }
        if(count>2)
        {
          System.out.printlm("Score is"+sum);
        }
        else
        {
          System.out.printl("Score is"+count)
        }
      }
    }
import java.until.Scanner;
public class CountWords {
public static void main (String[]args) {
Scanner in= new Scanner(System.in);
String word, sentence;ed
int count=0;
System.out.printl("Enter a word");
word=in.nextLine();
System.out.println("Enter a sentence");
sentence=in.nextLine();

if(!word.matches("[a-z]+")){
System.out.println("Invalid Input");
return;
}
String word[]= sentence.toLowerCase().split("");
for (int i=0;i<words.legth;i++){
  count++
}
}
System.out.println("Score is"+((int)Math.pow(2,count -1)));
}
}
INPUT: Enter battery capacity:1230
       Enter charging current value:400
Output:3.69 hours

import Java.until.scanner;
public class Main {
public static void main (String[]args){
  Scanner sc=new Scanner(System.in);  
System.out.printl("Enter battery capacity.");
double capacity=sc.nextDouble();
if(!(capacity>=1000 && capacity<=10000)){
  System.out.printl("Invalid battery capacity");
  return;
}
double time=0.0f;
time=(capacity/current)*1.2;
System.out.printl(String.format("%2f",time)+"Hours");
           }
}
INPUT: Enter the set of student:5
      Enter the roll number:1
                             3
                             4
                             5
                             6
OUTPUT                       1 3 5

import java.until.*;
public class Main
{
public static void main(String[]args){
  System.out.println("Enter the set of student");
  Scanner s=new Scanner(System.in);
  int setn=s.nextInt();
  if(setn<=0)
  {
    System.out.println(setn+"is an invalid size");
    return;
  }
  System.out.printl("Enter the roll number");
  int[]rolls=new in[setn];
  int oddflag=0;
  for(int i=0;i<setn;i++)
  {
    rolls[i]=s.nextInt();
    if(rolls[i]<0)
    {
      System.out.println(rolls[i]+"is ad invalid roll number");
      return;
    }
    if(rolls[i]%2!=0)
    {
      str=str+rolls[i];
    }
  }
  for(int n=0;n<str.length();n++)
                     {
                       System.out.println(str.charAt(n)+"");
      }
    }
  }
  INPUT: Enter your name:
         Enter the time duration:13
         List of paymen options 
         1)Visa Card 
         2)Rupay Card 
         3)Master Card 
         Choose an option:        2
 OUTPUT: Dear Sam yout bill amount is 1294.80

 import java.util*;
 public class Main

 {
   public static void main(String[]args){
     Scanner sc=new Scanner (System.in);
     System.out.printl("Enter your name");
     String s=sc.nextLine();double sal=o; double disc=0;
     for(int i=0;i<s.lenght();++i)
     {
       if(!Character.isLetter(s.charAt(i)))
       {
         System.out.printl("Invalid Name");
         return;
       }
      }
      System.out.printl("Enter the time duration");
      int (n<=0|| n>24)
      {
        System.out.printl("Invalid duration");
        return;
      }
      
Input 
