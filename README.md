# How to fix the error of Google Cloud Json file error

# Use this in ""Windows PowerShell""" -->

        $env:GOOGLE_APPLICATION_CREDENTIALS="c:\Users\Lahiru\Downloads\speech-to-text-328105-ee0c673f9292 (2).json"
        $env:GOOGLE_APPLICATION_CREDENTIALS="file path of json file of google API credentials"

# It is working

# And make sure to use """.raw""" type voice record

# If there is no ".raw" type voice record them it will not work --> ("mp3" --> is not available)
