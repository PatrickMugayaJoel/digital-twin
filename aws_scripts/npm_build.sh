cd /digitaltwin
npm run-script build

# run api server
cd /digitaltwin/api
sudo npm start &
exit

# Clean working folder
# sudo find /digitaltwin/api/api-tests -type f -delete
